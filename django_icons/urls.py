from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = patterns('',
    (r'^$', TemplateView.as_view(template_name="index.html")),
)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
