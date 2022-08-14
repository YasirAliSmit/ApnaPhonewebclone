
var mobile = {
    samsunggalaxyzflip4 : {
        'image':'<img src="mobile pics/Samsung/Samsung-Galaxy-Z-Flip4.jpg">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  7inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Price  219,999*'
        
    },
    samsunggalaxywatch5 : {
        'image':'<img src="mobile pics/Samsung/Samsung-Galaxy-Watch5.jpg">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  4inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Price  80,000*'
        
    },
    samsunggalaxyzfold4 : {
        'image':'<img src="mobile pics/Samsung/Samsung-Galaxy-Z-Fold-4.jpg">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  14inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs 318,999*'
        
    },
    samsunggalaxyxcover : {
        'image':'<img src="mobile pics/Samsung/Samsung-Galaxy-Xcover6-Pro.jpg">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  14inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs. 94,999*'
        
    },
    infinixnote12pro : {
        'image':'<img src="mobile pics/Infinix/Infinix-Note-12-Pro-4G.jpg">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  10inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs. 49,999*'
        
    },
    infinixnote12max : {
        'image':'<img src="mobile pics/Infinix/product_1657398306Infinix-Note-12-Pro-5G.jpg">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  14inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs. 54,999*'
        
    },
    
    infinixnote12vip : {
        'image':'<img src="mobile pics/Infinix/Infinix-Note-12-VIP.jpg">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  12inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs. 69,999*'
        
    },
    infinixnote11pro : {
        'image':'<img src="mobile pics/Infinix/infinix-note-11-pro.jpg">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  12inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs. 35,999*'
        
    },
    
    realmegtneo3t : {
        'image':'<img src="mobile pics/Real Me/Realme-GT-Neo-3T.jpg">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  12inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs. 89,999*'
        
    },
    realmepadx : {
        'image':'<img src="mobile pics/Real Me/Realme-Pad-X.jpg">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  16inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs. 49,999*'
        
    },
    realmec30 : {
        'image':'<img src="mobile pics/Real Me/Realme-C30-Pakistan.jpg">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  15inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs. 19,999*'
        
    },
     realnarzo50: {
        'image':'<img src="mobile pics/Real Me/Realme-Narzo-50-Pro.jpg">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  15inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs. 370,999*'
        
    },
    iphone13pro: {
        'image':'<img src="mobile pics/iphone/iphone13promax.jpg">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  15inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs. 370,990*'
        
    },
    
    iphone12pro512gb: {
        'image':'<img src="mobile pics/iphone/iphone12promx.jpg" width="20%" >',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  15inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs. 247,990*'
        
    },
    iphone13max: {
        'image':'<img src="mobile pics/iphone/IPHONE 13 PRO MAX.jpg" width="20%" >',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  15inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs. 380,490*'
        
    },
    iphone14max: {
        'image':'<img src="mobile pics/iphone/IPHONE 14 PRO.jpg" width="20%">',
        'Batery':'Battery  5000MAH',
        'ScreenSize': 'Screen Size  15inch',
        'PTA': 'PTA  Aprove',
        'Price': 'Rs. 214,999*'
        
    },
}


function functionUser(){
var user =   document.getElementById('text').value 
var client=user.toLowerCase().trim().replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(' ','')
if(mobile[client]){
 document.getElementById('box').innerHTML= mobile[client].image+'<br>'+mobile[client].Batery+'<br>'+mobile[client].ScreenSize+'<br>'+mobile[client].PTA+"<br>"+mobile[client].Price
}else{
    alert('Sir You Can Contect Our CSR Team They Will arreng it.Thanks')
}
}