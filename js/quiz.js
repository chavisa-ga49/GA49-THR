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
    $('.loading-frame').delay( 6000 ).fadeOut( 400 );
		ansResult = ans.toString();
    console.log(ansResult);
    switch(ansResult) {
      case "x1a":
        console.log("ข้าวมันไก่ พรีเมี่ยม");
        $(".result-name").text("ข้าวหอมมะลิเก่า 100% ตรา มะลิฟ้า");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6297336283614d863c4c0db5_MockUpPic1%402x.png"></img>');
        $(".result-description").text("ข้าวหอมมะลิ 100% เกรดพรี่เมี่ยม เมื่อนำมาทำข้าวมันไก่ จะได้ความอร่อย นุ่มละมุนกำลังดี เม็ดข้าวขาวสวย");
        $(".quiz-result-btn").attr('href', '/products/khaawsukhphaaph-3');        break;
      case "x,1,b":
        console.log("ข้าวมันไก่ คุณภาพ+ราคา");
        $(".result-name").text("ข้าวหอมมะลิ 100% ตรา ดอกดาวเรืองส้ม");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6297387a32daee0d43a45226_MockUpPic3%402x-p-1080.png"></img>');
        $(".result-description").text("ข้าวหอมมะลิเก่า 100% เมื่อนำไปหุงทำข้าวมันไก่จะได้เม็ดข้าวสวยที่มีความเหนียวนุ่มลงตัวและมีกลิ่นหอมตามธรรมชาติ");
        $(".quiz-result-btn").attr('href', '/products/khaawkhaaw-4');
        break;
      case "x,1,c":
        console.log("ข้าวมันไก่ ประหยัด");
        $(".result-name").text("ข้าวหอมสุรินทร์ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/629738026423ddf71a1f9492_MockUpPic2%402x.png"></img>');
        $(".result-description").text("ข้าวหอมสุรินทร์ ผ่านการคัดสรรคุณภาพอย่างใส่ใจ เมื่อนำไปหุง ข้าวจะมีความหอมนุ่ม อร่อย น่าทาน และหุงขึ้นหม้อ เหมาะสำหรับผู้บริโภคข้าวหอมที่ราคาย่อมเยาว์และร้านอาหารทั่วไป ");
        $(".quiz-result-btn").attr('href', '/products/khaawh-m-4');
        break;
      case "x,1,d":
        console.log("ข้าวมันไก่ สุขภาพ");
        break;
      case "x,2,a":
        console.log("โจ๊ก พรีเมี่ยม");
        break;
      case "x,2,b":
        console.log("โจ๊ก คุณภาพ+ราคา");
        break;
      case "x,2,c":
        console.log("โจ๊ก ประหยัด");
        break;
      case "x,2,d":
        console.log("โจ๊ก สุขภาพ");
        break;
      case "x,3,a":
        console.log("ข้าวต้ม พรีเมี่ยม");
        break;
      case "x,3,b":
        console.log("ข้าวต้ม คุณภาพ+ราคา");
        break;
      case "x,3,c":
        console.log("ข้าวต้ม ประหยัด");
        break;
      case "x,3,d":
        console.log("ข้าวต้ม สุขภาพ");
        break;
      case "x,4,a":
        console.log("ข้าวหมูแดง พรีเมี่ยม");
        break;
      case "x,4,b":
        console.log("ข้าวหมูแดง คุณภาพ+ราคา");
        break;
      case "x,4,c":
        console.log("ข้าวหมูแดง ประหยัด");
        break;
      case "x,4,d":
        console.log("ข้าวหมูแดง สุขภาพ");
        break;
      case "y,1,a":
        console.log("หอมนุ่ม พรีเมี่ยม");
        break;
      case "y,1,b":
        console.log("หอมนุ่ม คุณภาพ+ราคา");
        break;
      case "y,1,c":
        console.log("หอมนุ่ม ประหยัด");
        break;
      case "y,1,d":
        console.log("หอมนุ่ม สุขภาพ");
        break;
      case "y,2,a":
        console.log("ร่วนๆ พรีเมี่ยม");
        break;
      case "y,2,b":
        console.log("ร่วนๆ คุณภาพ+ราคา");
        break;
      case "y,2,c":
        console.log("ร่วนๆ ประหยัด");
        break;
      case "y,2,d":
        console.log("ร่วนๆ สุขภาพ");
        break;
      case "y,3,a":
        console.log("เม็ดสวย พรีเมี่ยม");
        break;
      case "y,3,b":
        console.log("เม็ดสวย คุณภาพ+ราคา");
        break;
      case "y,3,c":
        console.log("เม็ดสวย ประหยัด");
        break;
      case "y,3,d":
        console.log("เม็ดสวย สุขภาพ");
        break;
      case "y,4,a":
        console.log("หอมพิเศษ พรีเมี่ยม");
        break;
      case "y,4,b":
        console.log("หอมพิเศษ คุณภาพ+ราคา");
        break;
      case "y,4,c":
        console.log("หอมพิเศษ ประหยัด");
        break;
      case "y,4,d":
        console.log("หอมพิเศษ สุขภาพ");
        break;
  }
	},550); 
  setTimeout(function(){
  	$('.result-wrap').removeClass('load');
  },7000); 
});

//Reset and Prev button
$('.reset-btn').on('click', function(){
  $('.tab-link-q_one').click(); 
  $('.quiz').fadeToggle( "fast", "linear" );
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