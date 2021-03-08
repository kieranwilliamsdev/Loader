function notify_update(tweight) {
    var dif_span = document.getElementById('display_dif');
    var notifyImage = document.getElementById('notify_image');
    var explainLimit = document.getElementById('explain_limit');
     
    if (tweight > wagon_load) {
         //dont forget to change the notification icon to red cross
         diff = tweight - wagon_load;
         explainLimit.innerHTML = ('Over loaded');
         dif_span.innerHTML = (diff.toFixed(0))+('kg overweight');
         notifyImage.innerHTML = ('<img src=\"images/redcross.svg\" alt=\"green tick\"/>');

     }

     if (tweight < wagon_load) {
         //dont forget to change notification icon to the green tick
         diff = wagon_load - tweight;
         explainLimit.innerHTML = ('Within load limit');
         dif_span.innerHTML = (diff.toFixed(0))+('kg under limit');
         notifyImage.innerHTML = ('<img src=\"images/greentick.svg\" alt=\"green tick\"/>');


     }
    
    
}