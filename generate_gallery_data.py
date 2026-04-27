import os
import json

base_path = r"c:\Users\abhij\OneDrive\Documents\Website work\Magpie Cottage\magpie-cottage\public\images\gallery"
categories_order = [
    "living-room", "dining-area", "bedroom-1", "bedroom-2", "bedroom-3",
    "full-bathroom-1", "full-bathroom-2", "full-bathroom-3", "exterior", "additional-photos"
]

data = []

for cat_id in categories_order:
    dir_path = os.path.join(base_path, cat_id)
    if not os.path.exists(dir_path):
        continue
    
    files = [f for f in os.listdir(dir_path) if f.endswith(('.jpg', '.jpeg', '.png'))]
    # Sort files numerically if they follow img_N format
    try:
        files.sort(key=lambda x: int(x.split('_')[1].split('.')[0]))
    except:
        files.sort()
        
    title = cat_id.replace('-', ' ').capitalize()
    
    images = []
    for i, f in enumerate(files):
        images.append({
            "src": f"/images/gallery/{cat_id}/{f}",
            "alt": f"{title} {i+1}"
        })
    
    # Add amenities if known or leave empty for user to fill
    amenities = ""
    if cat_id == "living-room": amenities = "Spacious seating · Natural light · Forest views"
    elif cat_id == "dining-area": amenities = "Al fresco dining · Forest backdrop"
    elif "bedroom" in cat_id: amenities = "En suite · Premium bedding · Natural light"
    
    data.append({
        "id": cat_id,
        "title": title.title(),
        "amenities": amenities,
        "images": images
    })

print(json.dumps(data, indent=2))
