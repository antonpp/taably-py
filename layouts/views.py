import datetime

from django.shortcuts import get_object_or_404, render_to_response
from django.template import RequestContext
from django.http import HttpResponse
from django.utils import simplejson
from django.views.decorators.csrf import ensure_csrf_cookie

from layouts.models import Layout

@ensure_csrf_cookie
def home(request):
  return render_to_response('edit_layout.html', context_instance=RequestContext(request))

def get_default(request):
  default_layout = get_object_or_404(Layout, pk=1)
  dthandler = lambda obj: obj.isoformat() if isinstance(obj, datetime.datetime) else None
  return HttpResponse(
      simplejson.dumps(dict(default_layout.__dict__), default=dthandler), 
      mimetype='application/json'
  )

def add_layout(request):
  if request.method == 'POST':
    data = simplejson.loads(request.raw_post_data)
    if 'data' in data and 'name' in data:
      layout_data = data['data']
      layout_name = data['name']
      layout = Layout(name=layout_name, data=layout_data)
      layout.save()
      return HttpResponse(
        simplejson.dumps({'status': 'ok', 'slug': layout.slug, 'url': layout.get_absolute_url()}), 
        mimetype='application/json'
      )
    else:
      return HttpResponse(
        simplejson.dumps({'error': 'supply name and data fields for the layout'}), 
        mimetype='application/json'
      )

  else:
    return HttpResponse(content="Method not allowed", status=405)

@ensure_csrf_cookie
def list_layouts(request):
  layouts = Layout.objects.all()
  return render_to_response('list_layouts.html', {'layouts': layouts}, 
                            context_instance=RequestContext(request))

@ensure_csrf_cookie
def edit_layout(request, slug, date):
  dt = datetime.datetime.strptime(date, "%y%m%d")
  layout = get_object_or_404(Layout, slug=slug, created_date__year=dt.year, 
      created_date__month=dt.month, created_date__day=dt.day)
  return render_to_response('edit_layout.html', {'layout': layout}, 
                            context_instance=RequestContext(request))

