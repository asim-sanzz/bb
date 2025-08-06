var APP_DATA = {
  "scenes": [
    {
      "id": "0-bedroom",
      "name": "BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.602503351090803,
          "pitch": 0.3880380773028538,
          "rotation": 0,
          "target": "1-dressing-unit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dressing-unit",
      "name": "DRESSING UNIT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6075135223502137,
          "pitch": 0.2771256986072359,
          "rotation": 0,
          "target": "0-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BEDROOM1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
