const ans = ["", "", ""];
var ansResult;

//Question 1
//Click radio button top Store answer then go to next tab
$('#next-x').on('click', function() {
	$(this).removeClass('not-check');
  $(this).siblings('.radio-button-field').addClass('not-check');
  ans[0] = "x";
  console.log(ans[0]);
	setTimeout(function(){
    $('.tab-link-q_two_x').click(); 
    $('.progress-bar-indicator').css('width', '33.3%');
	},550); 
});
$('#next-y').on('click', function() {
	$(this).removeClass('not-check');
  $(this).siblings('.radio-button-field').addClass('not-check');
  ans[0] = "y";
  console.log(ans[0]);
	setTimeout(function(){
    $('.tab-link-q_two_y').click();
    $('.progress-bar-indicator').css('width', '33.3%');
	},550); 
});

//Question 2 X and Y
//Click radio button top Store answer then go to next tab
$('#next-1').on('click', function() {
	ans[1] = "1";
  console.log(ans[1]);
});
$('#next-2').on('click', function() {
	ans[1] = "2";
  console.log(ans[1]);
});
$('#next-3').on('click', function() {
	ans[1] = "3";
  console.log(ans[1]);
});
$('#next-4').on('click', function() {
	ans[1] = "4";
  console.log(ans[1]);
});
$('#next-5').on('click', function() {
	ans[1] = "5";
  console.log(ans[1]);
});
$('#next-6').on('click', function() {
	ans[1] = "6";
  console.log(ans[1]);
});
$('#next-7').on('click', function() {
	ans[1] = "7";
  console.log(ans[1]);
});
$('#next-8').on('click', function() {
	ans[1] = "8";
  console.log(ans[1]);
});
$('#next-1, #next-2, #next-3, #next-4, #next-5, #next-6, #next-7, #next-8').on('click', function() {
	$(this).removeClass('not-check');
  $(this).siblings('.radio-button-field').addClass('not-check');
	setTimeout(function(){
    $('.tab-link-q_three').click();
    $('.progress-bar-indicator').css('width', '66.6%');
	},550); 
});

//Question 3
//Click radio button top Store answer
$('#next-a').on('click', function() {
	ans[2] = "a";
  console.log(ans[2]);
});
$('#next-b').on('click', function() {
	ans[2] = "b";
  console.log(ans[2]);
});
$('#next-c').on('click', function() {
	ans[2] = "c";
  console.log(ans[2]);
});
$('#next-d').on('click', function() {
	ans[2] = "d";
  console.log(ans[2]);
});

//Show Result Tab
$('#next-a, #next-b, #next-c, #next-d').on('click', function() {
	$(this).removeClass('not-check');
  $(this).siblings('.radio-button-field').addClass('not-check');
	setTimeout(function(){
    $('.tab-link-result').click();
    $('.progress-bar-indicator').css('width', '100%');
    $('.loading-frame').delay( 4000 ).fadeOut( 400 );
		ansResult = ans.toString();
    console.log(ansResult);
    switch(ansResult) {
      case "x,1,a":
        console.log("ข้าวมันไก่ พรีเมี่ยม");
        $(".result-name").text("Thai Hom Mali Rice 100% Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa7aa9040f7bed176735_Mali_BuaBan.webp"></img>');
        $(".result-description").text("Aromatic, soft, beautiful grains. It is suitable for eating with your favorite dishes, making Khao Man Kai, or using in general restaurants.");
        $(".quiz-result-btn").attr('href', '/products-en/blt-jas-old100');        
        break;
      case "x,1,b":
        console.log("ข้าวมันไก่ คุณภาพ+ราคา");
        $(".result-name").text("Thai Jasmine Rice Dok Bua Brand Thai Style Series");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa344e55ddda153e3dad_ThaiJasmineRiceQuality.webp"></img>');
        $(".result-description").text("Processed through Tong Hua's exclusive production. When cooked, it gives off a soft, delicious aroma. Good quality aromatic rice at a reasonable price.");
        $(".quiz-result-btn").attr('href', '/products-en/lth-jas-hommali');
        break;
      case "x,1,c":
        console.log("ข้าวมันไก่ ประหยัด");
        $(".result-name").text("Hom Surin Dok Bua Brand Thai Style Series");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa1b0f798363d50da770_HomSurin.webp"></img>');
        $(".result-description").text("Carefully selected. Looks appetizing when cooked as it turns into soft and delicious rice.");
        $(".quiz-result-btn").attr('href', '/products-en/lth-aro-surin');
        break;
      case "x,1,d":
        console.log("ข้าวมันไก่ สุขภาพ");
        $(".result-name").text("Thai Hom Mali Rice & Red Rice mixed (Munpoo) Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c74387c85e46acef1942_BLT_HT-Munpoo.webp"></img>');
        $(".result-description").text("Nutrient-rich, aromatic, and delicious. When cooked, the rice turns colorful and lucious. You will feel the different textures of both ice that are perfectly mixed.");
        $(".quiz-result-btn").attr('href', '/products-en/blt-hty-hommunpu');
        break;
      case "x,2,a":
        console.log("โจ๊ก พรีเมี่ยม");
        $(".result-name").text("Thai Hom Mali Broken Rice Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589af2f1579c710120346e_BrokenRice.webp"></img>');
        $(".result-description").text("Small broken jasmine rice from 100% authentic jasmine rice. When cooked, the rice gives off a natural aroma with balanced tenderness. Perfect for making porridge.");
        $(".quiz-result-btn").attr('href', '/products-en/blt-bkn-tonmali');
        break;
      case "x,2,b":
        console.log("โจ๊ก คุณภาพ+ราคา");
        $(".result-name").text("Thai Hom Mali Broken Rice Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589af2f1579c710120346e_BrokenRice.webp"></img>');
        $(".result-description").text("Small broken jasmine rice from 100% authentic jasmine rice. When cooked, the rice gives off a natural aroma with balanced tenderness. Perfect for making porridge.");
        $(".quiz-result-btn").attr('href', '/products-en/blt-bkn-tonmali');
        break;
      case "x,2,c":
        console.log("โจ๊ก ประหยัด");
        $(".result-name").text("Thai Hom Mali Broken Rice Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589af2f1579c710120346e_BrokenRice.webp"></img>');
        $(".result-description").text("Small broken jasmine rice from 100% authentic jasmine rice. When cooked, the rice gives off a natural aroma with balanced tenderness. Perfect for making porridge.");
        $(".quiz-result-btn").attr('href', '/products-en/blt-bkn-tonmali');
        break;
      case "x,2,d":
        console.log("โจ๊ก สุขภาพ");
        $(".result-name").text("Thai Hom Mali Red Rice 100% Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c61243987335e545710d_BLT_HT_Red.webp"></img>');
        $(".result-description").text("Rich in vitamins B1, B2, calcium and iron, including a lot of dietary fiber. The rice also contains antioxidants. It suitable for health-conscious people.");
        $(".quiz-result-btn").attr('href', '/products-en/blt-hty-red100');
        break;
      case "x,3,a":
        console.log("ข้าวอบสับปะรด พรีเมี่ยม");
        $(".result-name").text("Thai Hom Mali Rice 100% Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c648439873a9a5457391_BLT_JS100_45.webp"></img>');
        $(".result-description").text("The authentic Khao Dawk Mali 105 variety from the best source of jasmine rice cultivation. When cooked, the rice turns soft and fragrant, and separates easily.");
        $(".quiz-result-btn").attr('href', '/products-en/blt-jas-old100');
        break;
      case "x,3,b":
        console.log("ข้าวอบสับปะรด คุณภาพ+ราคา");
        $(".result-name").text("Thai Hom Mali Rice Dow Reung Brand (Orange)");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c689936d322f9c9bd3e5_CDO_JS100.webp"></img>');
        $(".result-description").text("You can be confident in the quality of 100% authentic jasmine rice that is a good value for money, delicious taste, soft aroma.");
        $(".quiz-result-btn").attr('href', '/products-en/cdo-jas-hommali');
        break;
      case "x,3,c":
        console.log("ข้าวอบสับปะรด ประหยัด");
        $(".result-name").text("Thai White Rice 100% Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589ca381ac6f78e6ab3fe8_BuaDang.webp"></img>');
        $(".result-description").text("When cooked, the grains turn into white, fluffy, easy to separate, but not hard. Suitable for people who enjoy eating fluffy and non-sticky rice at good value.");
        $(".quiz-result-btn").attr('href', '/products-en/lts-wht-taheang100');
        break;
      case "x,3,d":
        console.log("ข้าวอบสับปะรด สุขภาพ");
        $(".result-name").text("Thai Hom Mali Rice & Red Rice mixed (Munpoo) Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c74387c85e46acef1942_BLT_HT-Munpoo.webp"></img>');
        $(".result-description").text("Nutrient-rich, aromatic, and delicious. When cooked, the rice turns colorful and lucious. You will feel the different textures of both ice that are perfectly mixed.");
        $(".quiz-result-btn").attr('href', '/products-en/blt-hty-hommunpu');
        break;
      case "x,4,a":
        console.log("ข้าวผัดปู พรีเมี่ยม");
        $(".result-name").text("Thai Hom Mali Rice Dok Bua Brand (Gold) Thai Style Series");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa54490d1b2078cb16ca_ThaiJasmineRiceGold.webp"></img>');
        $(".result-description").text("Jasmine rice that is specially selected with care. With soft texture and fragrant smell, the rice looks mouth-watering and is delicious.");
        $(".quiz-result-btn").attr('href', '/products-en/lth-jas-gold');
        break;
      case "x,4,b":
        console.log("ข้าวผัดปู คุณภาพ+ราคา");
        $(".result-name").text("Hom Surin Dok Bua Brand Thai Style Series");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63d8d20d7de2b7bdcfd2ed72_HomSurin.png"></img>');
        $(".result-description").text("Carefully selected. Looks appetizing when cooked as it turns into soft and delicious rice.");
        $(".quiz-result-btn").attr('href', '/products-en/lth-aro-surin');
        break;
      case "x,4,c":
        console.log("ข้าวผัดปู ประหยัด");
        $(".result-name").text("Thai White Rice 100% Dok Bua Brand Thai Style Series");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589cceb3c62b14dacc54bb_White_TaHang.webp"></img>');
        $(".result-description").text("Seasonal rice that can be havested only once a year.  Suitable for people who enjoy eating fluffy and non-sticky rice at good value and economical price.");
        $(".quiz-result-btn").attr('href', '/products-en/lth-wht-taheang100');
        break;
      case "x,4,d":
        console.log("ข้าวผัดปู สุขภาพ");
        $(".result-name").text("Thai Hom Mali Brown Rice 100% Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c724a043692fd1199a6a_BLT_HT-Brown.webp"></img>');
        $(".result-description").text("Nutrient-rich, containing vitamins B1, B2, calcium and iron, as well as a lot of dietary fiber and antioxidants. It is suitable for health-conscious people.");
        $(".quiz-result-btn").attr('href', '/products-en/blt-hty-brownjamine100');
        break;
      case "y,5,a":
        console.log("หอมนุ่ม พรีเมี่ยม");
        $(".result-name").text("Thai Jasmine Rice Dok Bua Brand Thai Style Series");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa344e55ddda153e3dad_ThaiJasmineRiceQuality.webp"></img>');
        $(".result-description").text("Processed through Tong Hua's exclusive production. When cooked, it gives off a soft, delicious aroma. Good quality aromatic rice at a reasonable price.");
        $(".quiz-result-btn").attr('href', '/products-en/lth-jas-hommali');
        break;
      case "y,5,b":
        console.log("หอมนุ่ม คุณภาพ+ราคา");
        $(".result-name").text("Hom Surin Dok Bua Brand Thai Style Series");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63d8d20d7de2b7bdcfd2ed72_HomSurin.png"></img>');
        $(".result-description").text("Carefully selected. Looks appetizing when cooked as it turns into soft and delicious rice.");
        $(".quiz-result-btn").attr('href', '/products-en/lth-aro-surin');
        break;
      case "y,5,c":
        console.log("หอมนุ่ม ประหยัด");
        $(".result-name").text("Thai Fragrant Rice Dow Reung Brand (Green)");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c6a1879d246856241bb2_CDG_AR.webp"></img>');
        $(".result-description").text("When cooked, the rice turns soft and aromatic. Suitable for consumers who like fragrant rice with good value for money, local food stalls, and made- to- order restaurants.");
        $(".quiz-result-btn").attr('href', '/products-en/cdg-aro-special');
        break;
      case "y,5,d":
        console.log("หอมนุ่ม สุขภาพ");
        $(".result-name").text("Thai Hom Mali Red Rice Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c61243987335e545710d_BLT_HT_Red.webp"></img>');
        $(".result-description").text("Rich in iron and copper, vitamin B1, vitamin B2 and carotene. Suitable for health-conscious people.");
        $(".quiz-result-btn").attr('href', '/products-en/lts-hty-hommalired');
        break;
      case "y,6,a":
        console.log("ร่วนๆ พรีเมี่ยม");
        $(".result-name").text("Thai Fragrant Rice mixed Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358a9d908dd80d5ecd9c10b_Green_Lotus.webp"></img>');
        $(".result-description").text("A mixture of seasonal white rice and fragrant rice. A good combination that makes it mouth- watering. Soft, fluffy when cooked.");
        $(".quiz-result-btn").attr('href', '/products-en/ltg-aro-mixed');
        break;
      case "y,6,b":
        console.log("ร่วนๆ คุณภาพ+ราคา");
        $(".result-name").text("Thai White Rice 100% Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589ca381ac6f78e6ab3fe8_BuaDang.webp"></img>');
        $(".result-description").text("When cooked, the grains turn into white, fluffy, easy to separate, but not hard. Suitable for people who enjoy eating fluffy and non-sticky rice at good value.");
        $(".quiz-result-btn").attr('href', '/products-en/lts-wht-taheang100');
        break;
      case "y,6,c":
        console.log("ร่วนๆ ประหยัด");
        $(".result-name").text("Thai White Rice Dok Bua Brand Thai Style Series");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589c67db103e6591f314fb_ThaiWhiteRice.webp"></img>');
        $(".result-description").text("Carefully selected for quality. It has light and fluffy texture, as well as not sticky. It is suitable for people who prefer fluffy rice that is good value for money.");
        $(".quiz-result-btn").attr('href', '/products-en/lth-wht-saohai');
        break;
      case "y,6,d":
        console.log("ร่วนๆ สุขภาพ");
        $(".result-name").text("Thai Hom Mali Rice & Red Rice mixed (Munpoo) Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c74387c85e46acef1942_BLT_HT-Munpoo.webp"></img>');
        $(".result-description").text("Nutrient-rich, aromatic, and delicious. When cooked, the rice turns colorful and lucious. You will feel the different textures of both ice that are perfectly mixed.");
        $(".quiz-result-btn").attr('href', '/products-en/blt-hty-hommunpu');
        break;
      case "y,7,a":
        console.log("เม็ดสวย พรีเมี่ยม");
        $(".result-name").text("Thai Hom Mali Rice 100% Mali Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/637306aff1bceb9dd348605a_BJM_JS100-p-2000.webp"></img>');
        $(".result-description").text("100% premium jasmine rice with a natural fragrance. When cooked, the rice gives off the white-shiny look and tender taste.");
        $(".quiz-result-btn").attr('href', '/products-en/bjm-jas-old100');
        break;
      case "y,7,b":
        console.log("เม็ดสวย คุณภาพ+ราคา");
        $(".result-name").text("Thai Jasmine Rice Dok Bua Brand Thai Style Series");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa344e55ddda153e3dad_ThaiJasmineRiceQuality.webp"></img>');
        $(".result-description").text("Processed through Tong Hua's exclusive production. When cooked, it gives off a soft, delicious aroma. Good quality aromatic rice at a reasonable price.");
        $(".quiz-result-btn").attr('href', '/products-en/lth-jas-hommali');
        break;
      case "y,7,c":
        console.log("เม็ดสวย ประหยัด");
        $(".result-name").text("Thai Fragrant Rice 100% Dok Bua Brand Thai Style Series");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401cdfc879d2464f324d432_LTH_AR-100.webp"></img>');
        $(".result-description").text("100% Fragrant Rice is soft and aromatic, similar to jasmine rice. A good alternative for people who enjoy fragrant rice at the best value of money.");
        $(".quiz-result-btn").attr('href', '/products-en/lth-aro-100');
        break;
      case "y,7,d":
        console.log("เม็ดสวย สุขภาพ");
        $(".result-name").text("Brown Rice 3 colors Mixed Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63730ad218c742ceac33230f_LTS_HT3-p-800.webp"></img>');
        $(".result-description").text("3-in-1 brown rice is rich in vitamins B1, B2, calcium and iron that helps prevent beriberi, as well as containing a lot of dietary fiber and antioxidants.");
        $(".quiz-result-btn").attr('href', '/products-en/lts-hty-healthy');
        break;
      case "y,8,a":
        console.log("หอมพิเศษ พรีเมี่ยม");
        $(".result-name").text("Thai Hom Mali Rice 100% New Crop Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c66496905f79e4a7c64b_BLT_JS100.webp"></img>');
        $(".result-description").text("Stored under a temperature below 15 degrees Celsius to maintain the quality and freshness. The grains look beautiful with clear and glossy exterior, and have natural fragrance.");
        $(".quiz-result-btn").attr('href', '/products-en/blt-jas-new100');
        break;
      case "y,8,b":
        console.log("หอมพิเศษ คุณภาพ+ราคา");
        $(".result-name").text("Thai Hom Mali Rice Dow Reung Brand (Orange)");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c689936d322f9c9bd3e5_CDO_JS100.webp"></img>');
        $(".result-description").text("You can be confident in the quality of 100% authentic jasmine rice that is a good value for money, delicious taste, soft aroma.");
        $(".quiz-result-btn").attr('href', '/products/cdo-jas-hommali');
        break;
      case "y,8,c":
        console.log("หอมพิเศษ ประหยัด");
        $(".result-name").text("Hom Surin Dok Bua Brand Thai Style Series");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63d8d20d7de2b7bdcfd2ed72_HomSurin.png"></img>');
        $(".result-description").text("Carefully selected. Looks appetizing when cooked as it turns into soft and delicious rice.");
        $(".quiz-result-btn").attr('href', '/products-en/lth-aro-surin');
        break;
      case "y,8,d":
        console.log("หอมพิเศษ สุขภาพ");
        $(".result-name").text("Thai Hom Mali Rice & Red Rice mixed (Munpoo) Dok Bua Brand");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c74387c85e46acef1942_BLT_HT-Munpoo.webp"></img>');
        $(".result-description").text("Nutrient-rich, aromatic, and delicious. When cooked, the rice turns colorful and lucious. You will feel the different textures of both ice that are perfectly mixed.");
        $(".quiz-result-btn").attr('href', '/products-en/blt-hty-hommunpu');
        break;
  }
	},550); 
  setTimeout(function(){
  	$('.result-wrap').removeClass('load');
  },5000); 
});

//Reset, Restart and Prev button
$('.reset-btn').on('click', function(){
  $('.tab-link-q_one').click(); 
  $('.quiz').fadeToggle( "fast", "linear" );
  $('.w-form-formradioinput').removeClass('w--redirected-checked');
  $('.radio-button-field').removeClass('not-check');
  $('.progress-bar-indicator').css('width', '5%');
  $('.loading-frame').fadeIn( 0 );
  $('.result-wrap').addClass('load');
});

$('.restart-btn').on('click', function(){
  $('.tab-link-q_one').click(); 
  $('.w-form-formradioinput').removeClass('w--redirected-checked');
  $('.radio-button-field').removeClass('not-check');
  $('.progress-bar-indicator').css('width', '5%');
  $('.loading-frame').fadeIn( 0 );
  $('.result-wrap').addClass('load');
});


$('#prev-2, #prev-3').on('click', function() {
	$('.tab-link-q_one').click(); 
  $('.progress-bar-indicator').css('width', '5%');
});

$('#prev-4').on('click', function() {
  if (ans[1] == "1") {
    $('.tab-link-q_two_x').click(); 
  } else if (ans[1] == "2") {
    $('.tab-link-q_two_x').click(); 
  } else if (ans[1] == "3") {
    $('.tab-link-q_two_x').click(); 
  } else if (ans[1] == "4") {
    $('.tab-link-q_two_x').click(); 
  } else {
    $('.tab-link-q_two_y').click(); 
  }
  $('.progress-bar-indicator').css('width', '33.33%');
});