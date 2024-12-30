<script src="./assets/js/jquery.js"></script>
<script src="./assets/js/bootstrap.bundle.min.js"></script>
<script src="./assets/js/owl.carousel.min.js"></script>
<script src="./assets/js/main.js"></script>
<script src="./assets/js/jquery.mixitup.min.js"></script>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
    AOS.init();
</script>
<script type="text/javascript">
    $(function () {
        var filterList = {
            init: function () {
                $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.all, .brochures, .menu, .logo, .branding, .website, .marketing, .post'  
                }     
                });               
            }
        };
    filterList.init();
    });   
</script>
