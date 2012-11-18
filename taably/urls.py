from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'layouts.views.home', name='home'),
    url(r'^top/$', 'layouts.views.list_layouts'),
    url(r'^t/(?P<slug>[-\w]+)/(?P<date>\d{6})/$', 'layouts.views.edit_layout'),
    url(r'^api/v0/layout/get/default/$', 'layouts.views.get_default'),
    url(r'^api/v0/layout/add/$', 'layouts.views.add_layout'),
    url(r'^admin/', include(admin.site.urls)),
)
