function Snow(){
    var container = $("#content");
    var visualWidth = container.width();
    var visualHeight = container.height();
    var snowflakeURl = [
        './Assets/snowflake1.png',
        './Assets/snowflake2.png',
        './Assets/snowflake3.png',
        './Assets/snowflake4.png',
        './Assets/snowflake5.png',
        './Assets/snowflake6.png',
    ];
    this.snowflake = function (){
        var $flakeContainer = $('#snowflake');
        function getImage(){
            return snowflakeURl[Math.floor(Math.random() * 6)];
        }
        function  createSnowBox() {
            var  url = getImage();
            return $('<div class="snowbox" />').css({
                'width': 41,
                'height': 41,
                'position': 'absolute',
                'backgroundSize': 'cover',
                'zIndex': 100000,
                'top': '-41px',
                'backgroundImage': 'url(' + url + ')'
            }).addClass('snowRoll');
        }
        
        setInterval(function () {
            var startPositionLeft = Math.random() * visualWidth - 100,
                startOpacity    = 1,
                endPositionTop  = visualHeight - 40,
                endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
                duration        = visualHeight * 10 + Math.random() * 5000;
            var randomStart = Math.random();
            randomStart = randomStart < 0.5 ? startOpacity : randomStart;

            var $flake = createSnowBox();

            $flake.css({
                left: startPositionLeft,
                opacity: randomStart}
            );

            $flakeContainer.append($flake);
            $flake.transition({
                top: endPositionTop,
                left: endPositionLeft,
                opacity: 0.7
            }, duration, 'ease-out', function() {
                $(this).remove() 
            });
        },200)
    }
    return this;
}