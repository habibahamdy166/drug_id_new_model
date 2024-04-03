from tensorflow.keras.models import load_model
from PIL import Image, ImageOps
import numpy as np
from io import BytesIO

model = load_model("static/keras_model.h5", compile=False)

class_names = ['Fish Oil', 'Feroglobin']

def predict_image(image_content):
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

    image = Image.open(BytesIO(image_content)).convert("RGB")
    image = ImageOps.fit(image, (224, 224), Image.LANCZOS)
    image_array = np.asarray(image)
    normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1
    data[0] = normalized_image_array

    prediction = model.predict(data)
    index = np.argmax(prediction)

    threshold = 0.5
    if prediction[0][index] < threshold:
        return "Unknown Drug", 0.0

    class_name = class_names[index]
    confidence_score = float(prediction[0][index])

    if isinstance(class_name, bytes):
        class_name = class_name.decode('utf-8')

    return class_name, confidence_score
