from django.shortcuts import render
from django.http import JsonResponse
from .utils import predict_image

def index(request):
    return render(request, 'drug_id_app/drug_id.html')

def classify_image(request):
    if request.method == 'POST' and request.FILES.get('image'):
        uploaded_image = request.FILES['image']

        image_content = uploaded_image.read()

        class_name, confidence_score = predict_image(image_content)  # Call the predict_image function from utils.py

        return JsonResponse({'result': class_name, 'confidence_score': confidence_score})
    else:
        return JsonResponse({'error': 'No image uploaded'})
