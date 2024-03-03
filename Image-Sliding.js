<script>
     var a=['2.jpg','3.jpg','2.jpg','3.jpg','2.jpg']
     var i=0;
     var d=2000;
    function image-Sliding()
    {
        document.getElementById('image-Sliding').src=a[i];i++
        if(i==a.length)
        
            {i=0}
        
        setTimeout("imagesliding()",d);
    }
     imagesliding()
     </script>     
