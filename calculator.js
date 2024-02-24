let Answer = document.getElementById("Answer")

let Write = document.getElementById("Write")




 let btn = document.querySelectorAll(".btn")  //to select all button , ek ke karke onclick function lagane se acha ye lagao , querySelectorAll all button ka arry banakar use btn me rakh dega note = isme agar class hai to dot (.) lagakar hi class ka nam likhna padega tabhi kam karega 

 for (let i of btn)  // of mean array ke andar jo bhi element hai use i ke andar rakho or "in" = array ka index put karta hai 
 {
    i.addEventListener("click",(c)=>   //har ek btn par onclick likhane ki jagah hum ye likh sakte hai bina onclick ko html me likhane ke bajay ise likh kar kam chalaya ja sakta hai 
    {
        let BtnText = c.target.innerText;
    
        if(BtnText == "AC")
        {
            Answer.innerText = "";
        }
        else if(BtnText == "=")
        {
            Write.innerText = Answer.innerText;
            Answer.innerText = eval(Answer.innerText);
        }
        else{
        Answer.innerText += BtnText;
        }
    })

 }


 /* Mouse ke kuch events or unke work
 क्लिक (click): यह इवेंट जब होता है जब उपयोगकर्ता किसी तत्व पर माउस बटन को दबाता है और छोड़ता है।

डबलक्लिक (dblclick): डबलक्लिक इवेंट तब होता है जब उपयोगकर्ता किसी तत्व पर डबल-क्लिक करता है, सामान्यत: माउस बटन।

माउसओवर (mouseover): यह इवेंट जब होता है जब माउस पॉइंटर एक तत्व के क्षेत्र में प्रवेश करता है। यह अक्सर तत्व के ऊपर होवर होने पर उपयोग किया जाता है।

माउसआउट (mouseout): माउसआउट इवेंट तब फायर होता है जब माउस पॉइंटर एक तत्व के क्षेत्र से बाहर निकलता है।

माउसडाउन (mousedown): यह इवेंट जब होता है जब माउस बटन किसी तत्व पर नीचे दबाया जाता है।

माउसअप (mouseup): माउसअप इवेंट तब फायर होता है जब किसी तत्व पर दबाया गया माउस बटन छोड़ा जाता है।

माउसमूव (mousemove): यह इवेंट जब होता है जब माउस पॉइंटर किसी तत्व के ऊपर चलता है। यह अक्सर माउस की गति का ट्रैक करने और अनुसार होने वाले क्रियाएँ ट्रिगर करने के लिए उपयोग किया जाता है।

*/

/*
Keyboard Events (कुंजीपटल इवेंट्स):

कीडाउन (keydown): यह इवेंट जब होता है तब जब उपयोगकर्ता कोई कुंजी दबाता है।

कीप्रेस (keypress): कीप्रेस इवेंट उत्पन्न होता है जब उपयोगकर्ता किसी कुंजी को दबाता है, परंतु कीबोर्ड द्वारा प्रतिक्रिया नहीं मिलती है।

कीअप (keyup): कीअप इवेंट तब होता है जब उपयोगकर्ता कोई कुंजी छोड़ता है।

Form Events (फॉर्म इवेंट्स):

सबमिट (submit): जब उपयोगकर्ता एक फॉर्म सबमिट करता है, तो यह इवेंट ट्रिगर होता है।

रीसेट (reset): रीसेट इवेंट जब होता है तब जब उपयोगकर्ता एक फॉर्म को रीसेट करता है।

फोकस (focus): जब एक तत्व (जैसे एक इनपुट बॉक्स) को उपयोगकर्ता चुनता है, तो फोकस इवेंट ट्रिगर होता है।

ब्लर (blur): ब्लर इवेंट तब होता है जब एक तत्व से फोकस हट जाता है।

चेंज (change): चेंज इवेंट जब होता है जब एक इनपुट फ़ील्ड का मान बदलता है।

इनपुट (input): इनपुट इवेंट जब होता है तब जब उपयोगकर्ता एक इनपुट फ़ील्ड में कुछ टेक्स्ट दर्ज करता है।
*/

/*
Window Events (विंडो इवेंट्स):

लोड (load): जब वेब पृष्ठ पूरी तरह से लोड होता है, तो यह इवेंट ट्रिगर होता है।

अनलोड (unload): जब एक विंडो या फ्रेम का चालान विंडो से हटाया जाता है, तो यह इवेंट ट्रिगर होता है।

रीसाइज़ (resize): जब विंडो का आकार बदलता है, तो यह इवेंट ट्रिगर होता है।

स्क्रॉल (scroll): जब एक विंडो या डिव को स्क्रॉल किया जाता है, तो यह इवेंट ट्रिगर होता है।

Document Events (डॉक्यूमेंट इवेंट्स):

DOMContentLoaded: यह इवेंट तब होता है जब HTML डॉक्यूमेंट पूरी तरह से लोड हो जाता है और DOM पार्स हो जाता है, बिना images और stylesheets के इंतजार किए।

readystatechange: यह इवेंट डॉक्यूमेंट की स्थिति को संदर्भित करता है।

Touch Events (टच इवेंट्स):

टचस्टार्ट (touchstart): जब एक उपयोगकर्ता उपकरण के स्क्रीन पर छूता है, तो यह इवेंट ट्रिगर होता है।

टचएंड (touchend): जब एक उपयोगकर्ता उपकरण के स्क्रीन को छोड़ता है, तो यह इवेंट ट्रिगर होता है।

टचमूव (touchmove): जब एक उपयोगकर्ता उपकरण के स्क्रीन पर हिलाता है, तो यह इवेंट ट्रिगर होता है।

टचकैंसल (touchcancel): यह इवेंट टच इवेंट को रद्द कर देता है, जैसे कि जब यूजर बाहरी सीमा के बाहर जाता है।

Media Events (मीडिया इवेंट्स):

प्ले (play): जब एक मीडिया फ़ाइल प्ले होती है, तो यह इवेंट ट्रिगर होता है।

पॉज़ (pause): जब एक मीडिया फ़ाइल पॉज़ होती है, तो यह इवेंट ट्रिगर होता है।

एंडेड (ended): जब एक मीडिया फ़ाइल समाप्त होती है, तो यह इवेंट ट्रिगर होता है।

वॉल्यूम बदलें (volumechange): जब एक मीडिया फ़ाइल के वॉल्यूम को बदला जाता है, तो यह इवेंट ट्रिगर होता है।

ड्यूरेशन चेंज (durationchange): जब एक मीडिया फ़ाइल की अवधि बदलती है, तो यह इवेंट ट्रिगर होता है।
*/