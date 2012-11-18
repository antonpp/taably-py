from django.db import models
from django.utils import timezone
from autoslug import AutoSlugField

class Layout(models.Model):
  name = models.CharField(max_length=64)
  data = models.TextField()
  created_date = models.DateTimeField(default=timezone.now)
  slug = AutoSlugField(
      populate_from='name', 
      unique_with=('created_date__day','created_date__year','created_date__month')
  )

  @models.permalink
  def get_absolute_url(self):
    return ('layouts.views.edit_layout', (), {
      'slug': self.slug,
      'date': self.created_date.strftime('%y%m%d'),
    })

  def __unicode__(self):
    return self.name
