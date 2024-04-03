from django.urls import path
from. import views


urlpatterns = [
    path('', views.index, name='drugid'),
    path('classify_image/', views.classify_image, name='classify_image'),

]