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
        $(".result-name").text("ข้าวหอมมะลิเก่า 100% ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa7aa9040f7bed176735_Mali_BuaBan.webp"></img>');
        $(".result-description").text("ข้าวหอมมะลิเก่า 100% ที่คัดสรรจากข้าวเปลือกพันธุ์ 105 แท้ จากแหล่งเพาะปลูกข้าวหอมมะลิที่ดีที่สุด มีลักษณะเม็ดเรียวยาว สวย ขาว มีกลิ่นหอมอ่อนๆ คล้ายกลิ่นของใบเตย เมื่อนำไปหุงจะได้เมล็ดข้าวสวย มีความหอม นุ่ม เมล็ดข้าวไม่เกาะตัวกัน เหมาะสำหรับทานกับกับข้าวจานโปรด และเหมาะกับร้านอาหาร ข้าวมันไก่");
        $(".quiz-result-btn").attr('href', '/products/blt-jas-old100');        
        break;
      case "x,1,b":
        console.log("ข้าวมันไก่ คุณภาพ+ราคา");
        $(".result-name").text("ข้าวหอมมะลิคุณภาพ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa344e55ddda153e3dad_ThaiJasmineRiceQuality.webp"></img>');
        $(".result-description").text("ข้าวหอมมะลิคุณภาพ ผ่านการผลิตเฉพาะของตงฮั้ว เมล็ดข้าวขาวสวยเต็มเมล็ด เมื่อนำไปหุงจะมีความหอมนุ่ม อร่อย เหมาะสำหรับผู้บริโภคข้าวหอมคุณภาพดีในราคายอมเยาว์และโรงแรมร้านอาหาร");
        $(".quiz-result-btn").attr('href', '/products/lth-jas-hommali');
        break;
      case "x,1,c":
        console.log("ข้าวมันไก่ ประหยัด");
        $(".result-name").text("ข้าวหอมสุรินทร์ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa1b0f798363d50da770_HomSurin.webp"></img>');
        $(".result-description").text("ข้าวหอมสุรินทร์ ผ่านการคัดสรรคุณภาพอย่างใส่ใจ เมื่อนำไปหุงเป็นข้าวสวยจะมีความนุ่ม อร่อย น่าทาน เหมาะสำหรับผู้บริโภคข้าวหอมที่ราคาย่อมเยาว์และร้านอาหารทั่วไป");
        $(".quiz-result-btn").attr('href', '/products/lth-aro-surin');
        break;
      case "x,1,d":
        console.log("ข้าวมันไก่ สุขภาพ");
        $(".result-name").text("ข้าวหอมมันปู ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/632a82abe4ce4349dbffffdb_62cbecea65c529dd36ea9661_alternative-p-img2%25402x.png"></img>');
        $(".result-description").text("ข้าวหอมมันปู เป็นกล้องหอมมะลิแดงผสมกับข้าวหอมมะลิ100% เป็นข้าวที่อุดมไปด้วยวิตามิน B1, B2 แคลเซียม และธาตุเหล็ก รวมทั้งมีเส้นใยอาหารมากให้คุณค่าทางโภชนาการสูง มีสารต่อต้านอนุมูลอิสระ เหมาะสำหรับคนที่รักสุขภาพ เมื่อหุงสุกจะมีสีสันสวยงามน่ารับประทาน เมื่อทานข้าวจะสัมผัสถึงเนื้อข้าวทั้งสองชนิดที่ผสมกันอย่างลงตัว");
        $(".quiz-result-btn").attr('href', '/products/blt-hty-hommunpu');
        break;
      case "x,2,a":
        console.log("โจ๊ก พรีเมี่ยม");
        $(".result-name").text("ข้าวท่อนมะลิ ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589af2f1579c710120346e_BrokenRice.webp"></img>');
        $(".result-description").text("ข้าวท่อนมะลิ เป็นข้าวหักขนาดเล็กพอดี เกิดจากข้าวหอมมะลิแท้ 100% เมื่อนำไปหุงจะได้ข้าวที่มีความหอมนุ่มลงตัวและมีกลิ่นหอมตามธรรมชาติ เหมาะสำหรับทำโจ๊ก");
        $(".quiz-result-btn").attr('href', '/products/blt-bkn-tonmali');
        break;
      case "x,2,b":
        console.log("โจ๊ก คุณภาพ+ราคา");
        $(".result-name").text("ข้าวท่อนมะลิ ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589af2f1579c710120346e_BrokenRice.webp"></img>');
        $(".result-description").text("ข้าวท่อนมะลิ เป็นข้าวหักขนาดเล็กพอดี เกิดจากข้าวหอมมะลิแท้ 100% เมื่อนำไปหุงจะได้ข้าวที่มีความหอมนุ่มลงตัวและมีกลิ่นหอมตามธรรมชาติ เหมาะสำหรับทำโจ๊ก");
        $(".quiz-result-btn").attr('href', '/products/blt-bkn-tonmali');
        break;
      case "x,2,c":
        console.log("โจ๊ก ประหยัด");
        $(".result-name").text("ข้าวท่อนมะลิ ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589af2f1579c710120346e_BrokenRice.webp"></img>');
        $(".result-description").text("ข้าวท่อนมะลิ เป็นข้าวหักขนาดเล็กพอดี เกิดจากข้าวหอมมะลิแท้ 100% เมื่อนำไปหุงจะได้ข้าวที่มีความหอมนุ่มลงตัวและมีกลิ่นหอมตามธรรมชาติ เหมาะสำหรับทำโจ๊ก");
        $(".quiz-result-btn").attr('href', '/products/blt-bkn-tonmali');
        break;
      case "x,2,d":
        console.log("โจ๊ก สุขภาพ");
        $(".result-name").text("ข้าวกล้องหอมมะลิแดง 100% ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629700b0455924afb7acade3/6358e7253ea08a7dca457d58_placeholder.png"></img>');
        $(".result-description").text("ข้าวกล้องหอมมะลิแดง เป็นข้าวที่อุดมไปด้วยวิตามิน B1, B2 แคลเซียม และธาตุเหล็ก รวมทั้งมีเส้นใยอาหารมากให้คุณค่าทางโภชนาการสูง มีสารต่อต้านอนุมูลอิสระ เหมาะสำหรับ คนที่รักสุขภาพ");
        $(".quiz-result-btn").attr('href', '/products/blt-hty-red100');
        break;
      case "x,3,a":
        console.log("ข้าวต้ม พรีเมี่ยม");
        $(".result-name").text("ข้าวหอมมะลิกลางปี 100% ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa90a9040f78e21767b0_WhiteMali_BuaBan.webp"></img>');
        $(".result-description").text("ข้าวหอมมะลิแท้ 100% มีลักษณะเรียวยาว เมื่อนำไปสีจะได้ข้าวสารเมล็ดเรียว เมื่อนำไปหุงจะได้เมล็ดข้าวสวยที่มีความเหนียวนุ่มอร่อยลงตัวและมีกลิ่นหอมตามธรรมชาติ เหมาะสำหรับนำไปทำข้าวต้ม และผู้ที่ชอบทานข้าวหอมมะลิเหนียวนุ่ม กำลังดี หรือ โรงแรมร้านอาหารระดับพรีเมี่ยม");
        $(".quiz-result-btn").attr('href', '/products/blt-jas-midyear100');
        break;
      case "x,3,b":
        console.log("ข้าวต้ม คุณภาพ+ราคา");
        $(".result-name").text("ข้าวหอมมะลิทอง ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa54490d1b2078cb16ca_ThaiJasmineRiceGold.webp"></img>');
        $(".result-description").text("ข้าวหอมมะลิ ที่ผ่านการคัดสรรพิเศษอย่างใส่ใจ เนื้อสัมผัสมีความหอม นุ่ม ชวนรับประทาน ทานอร่อย เหมาะสำหรับผู้ที่ชอบทานข้าวหอมมะลิ หอม นุ่ม กำลังดี เหมาะสำหรับนำไปทำข้าวต้ม และร้านอาหารตามสั่ง");
        $(".quiz-result-btn").attr('href', '/products/lth-jas-gold');
        break;
      case "x,3,c":
        console.log("ข้าวต้ม ประหยัด");
        $(".result-name").text("ข้าวหอม 100% ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358e230b69c453ea227cee3_Fragrant_Rice.webp"></img>');
        $(".result-description").text("ข้าวหอม 100% มีความนุ่มและมีกลิ่นหอมคล้ายข้าวหอมมะลิ คัดสรรคุณภาพเป็นพิเศษในพื้นที่ปลูกที่คุณภาพดี เป็นทางเลือกสำหรับคนที่ชอบการรับประทานข้าวหอมที่มีความนุ่มหอมในราคาคุ้มค่า");
        $(".quiz-result-btn").attr('href', '/products/lth-aro-100');
        break;
      case "x,3,d":
        console.log("ข้าวต้ม สุขภาพ");
        $(".result-name").text("ข้าวกล้องหอมมะลิ 100% ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629700b0455924afb7acade3/6358e7253ea08a7dca457d58_placeholder.png"></img>');
        $(".result-description").text("ข้าวกล้องหอมมะลิ เป็นข้าวที่อุดมไปด้วยวิตามิน B1, B2 แคลเซียม และธาตุเหล็ก รวมทั้งมีเส้นใยอาหารมากให้คุณค่าทางโภชนาการสูง มีสารต่อต้านอนุมูลอิสระ เหมาะสำหรับคนที่รักสุขภาพ");
        $(".quiz-result-btn").attr('href', '/products/blt-hty-brownjamine100');
        break;
      case "x,4,a":
        console.log("ข้าวหมูแดง พรีเมี่ยม");
        $(".result-name").text("ข้าวหอมผสม ตรา บัวเขียว");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358a9d908dd80d5ecd9c10b_Green_Lotus.webp"></img>');
        $(".result-description").text("ข้าวผสมระหว่างข้าวขาวนาปีกับข้าวหอม ข้าวขาวนาปีมีคุณลักษณะหุงขึ้นหม้อ แต่ไม่แข็งกระด้าง ผสมกับข้าวหอม ที่ให้ความหอมนุ่ม ในสัดส่วนที่พอเหมาะลงตัวในการรับประทานเหมาะสำหรับผู้ที่ชอบบริโภค ข้าวที่หุงขึ้นหม้อ นุ่ม ไม่แข็งกระด้าง ราคาคุ้มค่า เหมาะกับร้านข้าวแกงและร้านอาหารทั่วไป");
        $(".quiz-result-btn").attr('href', '/products/ltg-aro-mixed');
        break;
      case "x,4,b":
        console.log("ข้าวหมูแดง คุณภาพ+ราคา");
        $(".result-name").text("ข้าวขาวตาแห้ง 100% ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src=https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589cceb3c62b14dacc54bb_White_TaHang.webp"></img>');
        $(".result-description").text("ข้าวขาวตาแห้ง เป็นข้าวนาปี ปลูกได้เพียงปีละครั้งเท่านั้น มีคุณลักษณะ ขาว หุงขึ้นหม้อ เม็ดร่วน แต่ไม่แข็งกระด้าง เหมาะสำหรับผู้ที่ชอบบริโภค ข้าวที่หุงขึ้นหม้อ คุ้มค่า ราคาประหยัด");
        $(".quiz-result-btn").attr('href', '/products/lth-wht-taheang100');
        break;
      case "x,4,c":
        console.log("ข้าวหมูแดง ประหยัด");
        $(".result-name").text("ข้าวขาวชัยนาท 100% ตราดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589c9081ac6fa53fab3fa0_WhiteChaiNat.webp"></img>');
        $(".result-description").text("ข้าวขาวชัยนาท หุงขึ้นหม้อ เม็ดสวย ร่วน ไม่เหนียวติดกัน เหมาะสำหรับร้านข้าวนึ่งอาหารตามสั่ง หรือผู้ที่ชอบบริโภคข้าวที่หุงขึ้นหม้อ คุ้มค่า ราคาประหยัด");
        $(".quiz-result-btn").attr('href', '/products/blt-wht-chainat100');
        break;
      case "x,4,d":
        console.log("ข้าวหมูแดง สุขภาพ");
        $(".result-name").text("ข้าวไรซ์เบอร์รี่ ตรา ดอกบัว");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629700b0455924afb7acade3/6358e7253ea08a7dca457d58_placeholder.png"></img>');
        $(".result-description").text("ข้าวไรซ์เบอร์รี่ มีสารต้านอนุมูลอิสระ ลดอัตราเสี่ยงของโรคที่เกี่ยวกับหลอดเลือดสมอง และหัวใจ มีโอเมก้า 3 ที่ช่วยในการทำงานของระบบประสาท สมองและตับ หากทานเป็นประจำจะลดระดับน้ำตาลในเลือด จึงช่วยลดความเสี่ยงในการเป็นโรคเบาหวาน พร้อมทั้งมีกากใยอาหาร ที่เป็นประโยชน์ต่อระบบการขับถ่าย เหมาะสำหรับคนที่รักสุขภาพ");
        $(".quiz-result-btn").attr('href', '/products/lts-hty-riceberry');
        break;
      case "y,1,a":
        console.log("หอมนุ่ม พรีเมี่ยม");
        $(".result-name").text("ข้าวหอมมะลิคุณภาพ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa344e55ddda153e3dad_ThaiJasmineRiceQuality.webp"></img>');
        $(".result-description").text("ข้าวหอมมะลิคุณภาพ ผ่านการผลิตเฉพาะของตงฮั้ว เมล็ดข้าวขาวสวยเต็มเมล็ด เมื่อนำไปหุงจะมีความหอมนุ่ม อร่อย เหมาะสำหรับผู้บริโภคข้าวหอมคุณภาพดีในราคายอมเยาว์และโรงแรมร้านอาหาร");
        $(".quiz-result-btn").attr('href', '/products/lth-jas-hommali');
        break;
      case "y,1,b":
        console.log("หอมนุ่ม คุณภาพ+ราคา");
        $(".result-name").text("ข้าวหอมสุรินทร์ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa1b0f798363d50da770_HomSurin.webp"></img>');
        $(".result-description").text("ข้าวหอมสุรินทร์ ผ่านการคัดสรรคุณภาพอย่างใส่ใจ เมื่อนำไปหุงเป็นข้าวสวยจะมีความนุ่ม อร่อย น่าทาน เหมาะสำหรับผู้บริโภคข้าวหอมที่ราคาย่อมเยาว์และร้านอาหารทั่วไป");
        $(".quiz-result-btn").attr('href', '/products/lth-aro-surin');
        break;
      case "y,1,c":
        console.log("หอมนุ่ม ประหยัด");
        $(".result-name").text("ข้าวหอมคัดพิเศษ ตรา ดอกดาวเรืองเขียว");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629700b0455924afb7acade3/6358e7253ea08a7dca457d58_placeholder.png"></img>');
        $(".result-description").text("ข้าวหอมคัดพิเศษ ผ่านการคัดสรรพิเศษ เมื่อนำไปหุงจะได้เมล็ดข้าวสวยที่มีความหอมนุ่ม ราคาประหยัด เหมาะสำหรับผู้บริโภคข้าวหอมที่ต้องการราคาประหยัด หรือร้านข้าวแกงอาหารตามสั่ง");
        $(".quiz-result-btn").attr('href', '/products/cdg-aro-special');
        break;
      case "y,1,d":
        console.log("หอมนุ่ม สุขภาพ");
        $(".result-name").text("ข้าวกล้องมะลิแดง 100% ตรา ดอกบัว");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629700b0455924afb7acade3/6358e7253ea08a7dca457d58_placeholder.png"></img>');
        $(".result-description").text("ข้าวกล้องมะลิแดง อุดมธาตุเหล็กและทองแดงที่ช่วยบำรุงเลือด เหมาะกับผู้เป็นโลหิตจางและผู้หญิงมีประจำเดือน มีคุณค่าของ วิตามินบี 1 วิตามินบี 2 ช่วยบำรุงสมอง บรรเทาอาการอ่อนเพลีย และมีแคโรทินในข้าวจะแปลงสภาพเป็นวิตามินเอในร่างกาย ช่วยบำรุงสายตา เหมาะสำหรับคนที่รักสุขภาพ");
        $(".quiz-result-btn").attr('href', '/products/lts-hty-hommalired');
        break;
      case "y,2,a":
        console.log("ร่วนๆ พรีเมี่ยม");
        $(".result-name").text("ข้าวหอมผสม ตรา บัวเขียว");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358a9d908dd80d5ecd9c10b_Green_Lotus.webp"></img>');
        $(".result-description").text("ข้าวผสมระหว่างข้าวขาวนาปีกับข้าวหอม ข้าวขาวนาปีมีคุณลักษณะหุงขึ้นหม้อ แต่ไม่แข็งกระด้าง ผสมกับข้าวหอม ที่ให้ความหอมนุ่ม ในสัดส่วนที่พอเหมาะลงตัวในการรับประทานเหมาะสำหรับผู้ที่ชอบบริโภค ข้าวที่หุงขึ้นหม้อ นุ่ม ไม่แข็งกระด้าง ราคาคุ้มค่า เหมาะกับร้านข้าวแกงและร้านอาหารทั่วไป");
        $(".quiz-result-btn").attr('href', '/products/ltg-aro-mixed');
        break;
      case "y,2,b":
        console.log("ร่วนๆ คุณภาพ+ราคา");
        $(".result-name").text("ข้าวขาวตาแห้ง 100% ตราดอกบัว");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589ca381ac6f78e6ab3fe8_BuaDang.webp"></img>');
        $(".result-description").text("ข้าวขาวตาแห้ง เป็นข้าวขาวพันธุ์ดีจากแหล่งเพาะปลูกในเขตภาคตะวันออกเฉียงเหนือโดยเฉพาะจังหวัดนครราชสีมา เป็นข้าวนาปี คือ ปลูกได้เพียงปีละครั้งเท่านั้น มีคุณลักษณะ ขาว หุงขึ้นหม้อ เม็ดร่วน แต่ไม่แข็งกระด้าง เหมาะสำหรับผู้ที่ชอบบริโภค ข้าวที่หุงขึ้นหม้อ คุ้มค่า ราคาประหยัด เหมาะสำหรับร้านอาหารทั่วไปและร้านขายข้าวนึ่ง");
        $(".quiz-result-btn").attr('href', '/products/lts-wht-taheang100');
        break;
      case "y,2,c":
        console.log("ร่วนๆ ประหยัด");
        $(".result-name").text("ข้าวขาวเสาไห้ ตราดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589c67db103e6591f314fb_ThaiWhiteRice.webp"></img>');
        $(".result-description").text("ข้าวขาวเสาไห้ เป็นข้าวขาวพันธุ์เสาไห้ ที่ได้รับการคัดสรรคุณภาพเป็นพิเศษ มีคุณลักษณะ หุงขึ้นหม้อ เมล็ดสวย ร่วน ไม่เหนียวติดกัน เหมาะสำหรับผู้ที่ชอบบริโภค ข้าวที่หุงขึ้นหม้อ คุ้มค่า ราคาประหยัด");
        $(".quiz-result-btn").attr('href', '/products/khaawth-nmali-traad-kbawbaan');
        break;
      case "y,2,d":
        console.log("ร่วนๆ สุขภาพ");
        $(".result-name").text("ข้าวหอมมันปู ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629700b0455924afb7acade3/6358e7253ea08a7dca457d58_placeholder.png"></img>');
        $(".result-description").text("ข้าวหอมมันปู เป็นกล้องหอมมะลิแดงผสมกับข้าวหอมมะลิ100% เป็นข้าวที่อุดมไปด้วยวิตามิน B1, B2 แคลเซียม และธาตุเหล็ก รวมทั้งมีเส้นใยอาหารมากให้คุณค่าทางโภชนาการสูง มีสารต่อต้านอนุมูลอิสระ เหมาะสำหรับคนที่รักสุขภาพ เมื่อหุงสุกจะมีสีสันสวยงามน่ารับประทาน เมื่อทานข้าวจะสัมผัสถึงเนื้อข้าวทั้งสองชนิดที่ผสมกันอย่างลงตัว");
        $(".quiz-result-btn").attr('href', '/products/blt-hty-hommunpu');
        break;
      case "y,3,a":
        console.log("เม็ดสวย พรีเมี่ยม");
        $(".result-name").text("ข้าวหอมมะลิเก่า 100% ตรา มะลิฟ้า");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629700b0455924afb7acade3/6358e7253ea08a7dca457d58_placeholder.png"></img>');
        $(".result-description").text("ข้าวหอมมะลิ 100% เกรดพรี่เมี่ยม ผ่านขบวนการคัดเลือกจากแหล่งวัตถุดิบชั้นเลิศ ที่ปลูกได้ปีละครั้งเท่านั้น เมล็ดข้าวสารมีลักษณะเม็ดเรียว ยาว มีกลิ่นหอมตามธรรมชาติ เมื่อนำไปหุง ข้าวจะส่งกลิ่นหอมชวนทาน เมื่อลิ้มลองจะได้ความอร่อย นุ่มละมุนกำลังดี เมล็ดข้าวขาวสวย เหมาะสำหรับทำข้าวผัดเมนูต่างๆ หรือจะทานคู่กับเมนูไหนก็อร่อย");
        $(".quiz-result-btn").attr('href', '/products/bjm-jas-old100');
        break;
      case "y,3,b":
        console.log("เม็ดสวย คุณภาพ+ราคา");
        $(".result-name").text("ข้าวหอมมะลิคุณภาพ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa344e55ddda153e3dad_ThaiJasmineRiceQuality.webp"></img>');
        $(".result-description").text("ข้าวหอมมะลิคุณภาพ ผ่านการผลิตเฉพาะของตงฮั้ว เมล็ดข้าวขาวสวยเต็มเมล็ด เมื่อนำไปหุงจะมีความหอมนุ่ม อร่อย เหมาะสำหรับผู้บริโภคข้าวหอมคุณภาพดีในราคายอมเยาว์และโรงแรมร้านอาหาร");
        $(".quiz-result-btn").attr('href', '/products/lth-jas-hommali');
        break;
      case "y,3,c":
        console.log("เม็ดสวย ประหยัด");
        $(".result-name").text("ข้าวหอม 100% ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358e230b69c453ea227cee3_Fragrant_Rice.webp"></img>');
        $(".result-description").text("ข้าวหอม 100% มีความนุ่มและมีกลิ่นหอมคล้ายข้าวหอมมะลิ คัดสรรคุณภาพเป็นพิเศษในพื้นที่ปลูกที่คุณภาพดี เป็นทางเลือกสำหรับคนที่ชอบการรับประทานข้าวหอมที่มีความนุ่มหอมในราคาคุ้มค่า");
        $(".quiz-result-btn").attr('href', '/products/lth-aro-100');
        break;
      case "y,3,d":
        console.log("เม็ดสวย สุขภาพ");
        $(".result-name").text("ข้าวกล้องสามสี ตรา ดอกบัว");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629700b0455924afb7acade3/6358e7253ea08a7dca457d58_placeholder.png"></img>');
        $(".result-description").text("ข้าวกล้องสามสี เป็นข้าวที่อุดมไปด้วยวิตามิน B1, B2 แคลเซียม และธาตุเหล็ก ป้องกันโรคเหน็บชา รวมทั้งมีเส้นใยอาหารมากให้คุณค่าทางโภชนาการสูง มีสารต่อต้านอนุมูลอิสระ เหมาะสำหรับคนที่รักสุขภาพ");
        $(".quiz-result-btn").attr('href', '/products/lts-hty-healthy');
        break;
      case "y,4,a":
        console.log("หอมพิเศษ พรีเมี่ยม");
        $(".result-name").text("ข้าวหอมมะลิใหม่ 100% ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629700b0455924afb7acade3/6358e7253ea08a7dca457d58_placeholder.png"></img>');
        $(".result-description").text("ข้าวหอมมะลิใหม่ต้นฤดู 100% ที่ผ่านการคัดสรรข้าวเปลือกจากแหล่งเพาะปลูกข้าวหอมมะลิชั้นเลิศของประเทศไทย มีการจัดเก็บภายใต้อุณหภูมิที่ต่ำกว่า 15 องศาเซลเซียส เพื่อคงคุณภาพข้าวให้มีความสดใหม่ เมล็ดข้าวสวยใส กลิ่นหอมตามธรรมชาติ ทำให้ข้าวใหม่ต้นฤดูของเรา เหนียว นุ่ม มียาง เหมาะกับผู้ที่ชอบทานข้าวหอมมะลิที่มีความหอม นุ่ม เหนียว หรือทำเป็นข้าวต้มก็อร่อย");
        $(".quiz-result-btn").attr('href', '/products/blt-jas-new100');
        break;
      case "y,4,b":
        console.log("หอมพิเศษ คุณภาพ+ราคา");
        $(".result-name").text("ข้าวหอมมะลิ ตรา ดอกดาวเรืองส้ม");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629700b0455924afb7acade3/6358e7253ea08a7dca457d58_placeholder.png"></img>');
        $(".result-description").text("ข้าวหอมมะลิ อีกหนึ่งแบรนด์ของตงฮั้ว ที่คู่ครัวคนไทยมายาวนาน จึงมั่นใจได้ในคุณภาพของข้าวหอมมะลิแท้ 100% ที่มีราคาคุ้มค่า รสชาติอร่อย หอมนุ่มถูกใจ เหมาะสำหรับร้านอาหารที่ต้องการข้าวหอมมะลิแท้คุณภาพดี ในราคาประหยัด หรือเหมาะกับร้านอาหารทุกๆ ประเภท");
        $(".quiz-result-btn").attr('href', '/products/cdo-jas-hommali');
        break;
      case "y,4,c":
        console.log("หอมพิเศษ ประหยัด");
        $(".result-name").text("ข้าวหอมสุรินทร์ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa1b0f798363d50da770_HomSurin.webp"></img>');
        $(".result-description").text("ข้าวหอมสุรินทร์ ผ่านการคัดสรรคุณภาพอย่างใส่ใจ เมื่อนำไปหุงเป็นข้าวสวยจะมีความนุ่ม อร่อย น่าทาน เหมาะสำหรับผู้บริโภคข้าวหอมที่ราคาย่อมเยาว์และร้านอาหารทั่วไป");
        $(".quiz-result-btn").attr('href', '/products/lth-aro-surin');
        break;
      case "y,4,d":
        console.log("หอมพิเศษ สุขภาพ");
        $(".result-name").text("ข้าวหอมมันปู ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629700b0455924afb7acade3/6358e7253ea08a7dca457d58_placeholder.png"></img>');
        $(".result-description").text("ข้าวหอมมันปู เป็นกล้องหอมมะลิแดงผสมกับข้าวหอมมะลิ100% เป็นข้าวที่อุดมไปด้วยวิตามิน B1, B2 แคลเซียม และธาตุเหล็ก รวมทั้งมีเส้นใยอาหารมากให้คุณค่าทางโภชนาการสูง มีสารต่อต้านอนุมูลอิสระ เหมาะสำหรับคนที่รักสุขภาพ เมื่อหุงสุกจะมีสีสันสวยงามน่ารับประทาน เมื่อทานข้าวจะสัมผัสถึงเนื้อข้าวทั้งสองชนิดที่ผสมกันอย่างลงตัว");
        $(".quiz-result-btn").attr('href', '/products/blt-hty-hommunpu');
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