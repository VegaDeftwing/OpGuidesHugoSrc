+++
bookToC = false
+++

# <span class="conlang" style="font-size:1em">󱤐󱤾󱥍󱥠󱥔</span>

<script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>

<div id="myDiv" class="conlang">

</div>

<script>
    function fixedFromCharCode (codePt) {
        if (codePt > 0xFFFF) {
            codePt -= 0x10000;
            return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
        } else {
            return String.fromCharCode(codePt);
        }
    }
    var text = '';
    var next_chr = '';
    var which_structure = 0;
    var random_val = 0;
    var random_char_code = 0;
    var previous_chr_code = 0;
    for(var i = 1; i < 1401; i++){

        random_val = Math.random() * 136;
        random_char_code = parseInt(0xF1900 + random_val);
    
        if((random_char_code === 0xF1909) || (random_char_code === 0xF1927) || (random_char_code === 0xF1921)){
            random_val = Math.random() * 136;
            random_char_code = parseInt(0xF1900 + random_val);
        }
    
        while(random_char_code === previous_chr_code){
            random_val = Math.random() * 136;
            random_char_code = parseInt(0xF1900 + random_val);
        }
    
        next_chr = fixedFromCharCode(random_char_code);
    
        previous_chr_code = random_char_code;
    
        // text += next_chr;
    
        if(which_structure > .75){
            // la li
            if((i+7)%10 === 0){
                text+=fixedFromCharCode(0xF1921);
                previous_chr = 0xF1921;
            } else if((i+3)%10 === 0){
                text+=fixedFromCharCode(0xF1927);
                previous_chr_code = 0xF1927;
            } else {
                text += next_chr;
            }
        } else if(which_structure > .5) {
            // li a
            if((i+8)%10 === 0){
                text+=fixedFromCharCode(0xF1927);
                previous_chr_code = 0xF1927;
            } else if((i+4)%10 === 0){
                text+=fixedFromCharCode(0xF1909);
                previous_chr_code = 0xF1909;
            } else {
                text += next_chr;
            }
        } else if(which_structure > .25) {
            // la li
            if((i+8)%10 === 0){
                text+=fixedFromCharCode(0xF1921);
                previous_chr_code = 0xF1921;
            } else if((i+4)%10 === 0){
                text+=fixedFromCharCode(0xF1927);
                previous_chr_code = 0xF1927;
            } else {
                text += next_chr;
            }
        } else {
            // li a
            if((i+7)%10 === 0){
                text+=fixedFromCharCode(0xF1927);
                previous_chr_code = 0xF1927;
            } else if((i+3)%10 === 0){
                text+=fixedFromCharCode(0xF1909);
                previous_chr_code = 0xF1909;
            } else {
                text += next_chr;
            }
        }
    
        // text += next_chr;
    
        if(i%10 === 0){
            text+=" ";
            which_structure = Math.random();
        }
    }
    document.getElementById('myDiv').innerHTML = text;
</script>
