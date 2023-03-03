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
        $(".result-description").text("หอม นุ่ม เมล็ดข้าวไม่เกาะตัวกัน เหมาะสำหรับทานกับกับข้าวจานโปรด และเหมาะกับร้านอาหาร ข้าวมันไก่");
        $(".quiz-result-btn").attr('href', '/products/blt-jas-old100');        
        break;
      case "x,1,b":
        console.log("ข้าวมันไก่ คุณภาพ+ราคา");
        $(".result-name").text("ข้าวหอมมะลิคุณภาพ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa344e55ddda153e3dad_ThaiJasmineRiceQuality.webp"></img>');
        $(".result-description").text("ผ่านการผลิตเฉพาะของตงฮั้ว เมล็ดข้าวขาวสวยเต็มเมล็ด เมื่อนำไปหุงจะมีความหอมนุ่ม อร่อย เหมาะสำหรับผู้บริโภคข้าวหอมคุณภาพดีในราคายอมเยาว์");
        $(".quiz-result-btn").attr('href', '/products/lth-jas-hommali');
        break;
      case "x,1,c":
        console.log("ข้าวมันไก่ ประหยัด");
        $(".result-name").text("ข้าวหอมสุรินทร์ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa1b0f798363d50da770_HomSurin.webp"></img>');
        $(".result-description").text("ผ่านการคัดสรรคุณภาพอย่างใส่ใจ เมื่อนำไปหุงจะมีความนุ่ม อร่อย น่าทาน เหมาะสำหรับผู้บริโภคข้าวหอมที่ราคาย่อมเยาว์และร้านอาหารทั่วไป");
        $(".quiz-result-btn").attr('href', '/products/lth-aro-surin');
        break;
      case "x,1,d":
        console.log("ข้าวมันไก่ สุขภาพ");
        $(".result-name").text("ข้าวหอมมันปู ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c74387c85e46acef1942_BLT_HT-Munpoo.webp"></img>');
        $(".result-description").text("อุดมไปด้วยวิตามิน B1, B2 แคลเซียม และธาตุเหล็ก รวมทั้งมีเส้นใยอาหารมากให้คุณค่าทางโภชนาการสูง มีสารต่อต้านอนุมูลอิสระ เมื่อหุงสุกจะมีสีสันสวยงามน่ารับประทาน เมื่อทานข้าวจะสัมผัสถึงเนื้อข้าวทั้งสองชนิดที่ผสมกันอย่างลงตัว");
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
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c61243987335e545710d_BLT_HT_Red.webp"></img>');
        $(".result-description").text("อุดมไปด้วยวิตามิน B1, B2 แคลเซียม และธาตุเหล็ก รวมทั้งมีเส้นใยอาหารมากให้คุณค่าทางโภชนาการสูง มีสารต่อต้านอนุมูลอิสระ เหมาะสำหรับ คนที่รักสุขภาพ");
        $(".quiz-result-btn").attr('href', '/products/blt-hty-red100');
        break;
      case "x,3,a":
        console.log("ข้าวอบสับปะรด พรีเมี่ยม");
        $(".result-name").text("ข้าวหอมมะลิ 100% ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c648439873a9a5457391_BLT_JS100_45.webp"></img>');
        $(".result-description").text("ข้าวจากแหล่งเพาะปลูกข้าวหอมมะลิที่ดีที่สุด มีกลิ่นหอมอ่อนๆ คล้ายกลิ่นของใบเตย เมื่อนำไปหุงจะได้เมล็ดข้าวสวย มีความหอม นุ่ม เมล็ดข้าวไม่เกาะตัวกัน");
        $(".quiz-result-btn").attr('href', '/products/blt-jas-old100');
        break;
      case "x,3,b":
        console.log("ข้าวอบสับปะรด คุณภาพ+ราคา");
        $(".result-name").text("ข้าวหอมมะลิ ตรา ดอกดาวเรืองส้ม");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c689936d322f9c9bd3e5_CDO_JS100.webp"></img>');
        $(".result-description").text("ราคาคุ้มค่า รสชาติอร่อย หอมนุ่มถูกใจ เหมาะสำหรับร้านอาหารที่ต้องการข้าวหอมมะลิแท้คุณภาพดี ในราคาประหยัด หรือเหมาะกับร้านอาหารทุกๆ ประเภท");
        $(".quiz-result-btn").attr('href', '/products/cdo-jas-hommali');
        break;
      case "x,3,c":
        console.log("ข้าวอบสับปะรด ประหยัด");
        $(".result-name").text("ข้าวขาวตาแห้ง 100% ตรา ดอกบัว");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589ca381ac6f78e6ab3fe8_BuaDang.webp"></img>');
        $(".result-description").text("ขาว หุงขึ้นหม้อ เม็ดร่วน แต่ไม่แข็งกระด้าง เหมาะสำหรับผู้ที่ชอบบริโภค ข้าวที่หุงขึ้นหม้อ คุ้มค่า ราคาประหยัด ร้านอาหารทั่วไปและร้านขายข้าวนึ่ง");
        $(".quiz-result-btn").attr('href', '/products/lts-wht-taheang100');
        break;
      case "x,3,d":
        console.log("ข้าวอบสับปะรด สุขภาพ");
        $(".result-name").text("ข้าวหอมมันปู ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c74387c85e46acef1942_BLT_HT-Munpoo.webp"></img>');
        $(".result-description").text("อุดมไปด้วยวิตามิน B1, B2 แคลเซียม และธาตุเหล็ก รวมทั้งมีเส้นใยอาหารมากให้คุณค่าทางโภชนาการสูง มีสารต่อต้านอนุมูลอิสระ เมื่อหุงสุกจะมีสีสันสวยงามน่ารับประทาน เมื่อทานข้าวจะสัมผัสถึงเนื้อข้าวทั้งสองชนิดที่ผสมกันอย่างลงตัว");
        $(".quiz-result-btn").attr('href', '/products/blt-hty-hommunpu');
        break;
      case "x,4,a":
        console.log("ข้าวผัดปู พรีเมี่ยม");
        $(".result-name").text("ข้าวหอมมะลิทอง ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa54490d1b2078cb16ca_ThaiJasmineRiceGold.webp"></img>');
        $(".result-description").text("ผ่านการคัดสรรพิเศษอย่างใส่ใจ เหมาะสำหรับผู้ที่ชอบทานข้าวหอมมะลิ หอม นุ่ม กำลังดี หรือเหมาะกับร้านอาหารตามสั่ง");
        $(".quiz-result-btn").attr('href', '/products/lth-jas-gold');
        break;
      case "x,4,b":
        console.log("ข้าวผัดปู คุณภาพ+ราคา");
        $(".result-name").text("ข้าวหอมสุรินทร์ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63d8d20d7de2b7bdcfd2ed72_HomSurin.png"></img>');
        $(".result-description").text("ผ่านการคัดสรรคุณภาพอย่างใส่ใจ เมื่อนำไปหุงเป็นข้าวสวยจะมีความนุ่ม อร่อย น่าทาน เหมาะสำหรับผู้บริโภคข้าวหอมที่ราคาย่อมเยาว์และร้านอาหารทั่วไป");
        $(".quiz-result-btn").attr('href', '/products/lth-aro-surin');
        break;
      case "x,4,c":
        console.log("ข้าวผัดปู ประหยัด");
        $(".result-name").text("ข้าวขาวตาแห้ง 100% ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589cceb3c62b14dacc54bb_White_TaHang.webp"></img>');
        $(".result-description").text("ข้าวนาปี ปลูกได้เพียงปีละครั้งเท่านั้น มีคุณลักษณะ ขาว หุงขึ้นหม้อ เม็ดร่วน แต่ไม่แข็งกระด้าง เหมาะสำหรับผู้ที่ชอบบริโภค ข้าวที่หุงขึ้นหม้อ คุ้มค่า ราคาประหยัด");
        $(".quiz-result-btn").attr('href', '/products/lth-wht-taheang100');
        break;
      case "x,4,d":
        console.log("ข้าวผัดปู สุขภาพ");
        $(".result-name").text("ข้าวกล้องหอมมะลิ 100% ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c724a043692fd1199a6a_BLT_HT-Brown.webp"></img>');
        $(".result-description").text("อุดมไปด้วยวิตามิน B1, B2 แคลเซียม และธาตุเหล็ก รวมทั้งมีเส้นใยอาหารมากให้คุณค่าทางโภชนาการสูง มีสารต่อต้านอนุมูลอิสระ เหมาะสำหรับคนที่รักสุขภาพ");
        $(".quiz-result-btn").attr('href', '/products/blt-hty-brownjamine100');
        break;
      case "y,5,a":
        console.log("หอมนุ่ม พรีเมี่ยม");
        $(".result-name").text("ข้าวหอมมะลิคุณภาพ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa344e55ddda153e3dad_ThaiJasmineRiceQuality.webp"></img>');
        $(".result-description").text("ผ่านการผลิตเฉพาะของตงฮั้ว เมื่อนำไปหุงจะมีความหอมนุ่ม อร่อย เหมาะสำหรับผู้บริโภคข้าวหอมคุณภาพดีในราคายอมเยาว์และโรงแรมร้านอาหาร");
        $(".quiz-result-btn").attr('href', '/products/lth-jas-hommali');
        break;
      case "y,5,b":
        console.log("หอมนุ่ม คุณภาพ+ราคา");
        $(".result-name").text("ข้าวหอมสุรินทร์ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63d8d20d7de2b7bdcfd2ed72_HomSurin.png"></img>');
        $(".result-description").text("ผ่านการคัดสรรคุณภาพอย่างใส่ใจ เมื่อนำไปหุงเป็นข้าวสวยจะมีความนุ่ม อร่อย น่าทาน เหมาะสำหรับผู้บริโภคข้าวหอมที่ราคาย่อมเยาว์และร้านอาหารทั่วไป");
        $(".quiz-result-btn").attr('href', '/products/lth-aro-surin');
        break;
      case "y,5,c":
        console.log("หอมนุ่ม ประหยัด");
        $(".result-name").text("ข้าวหอมคัดพิเศษ ตรา ดอกดาวเรืองเขียว");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c6a1879d246856241bb2_CDG_AR.webp"></img>');
        $(".result-description").text("ผ่านการคัดสรรพิเศษ เมื่อนำไปหุงจะได้เมล็ดข้าวสวยที่มีความหอมนุ่ม ราคาประหยัด เหมาะสำหรับผู้บริโภคข้าวหอมที่ต้องการราคาประหยัด หรือร้านอาหารตามสั่ง");
        $(".quiz-result-btn").attr('href', '/products/cdg-aro-special');
        break;
      case "y,5,d":
        console.log("หอมนุ่ม สุขภาพ");
        $(".result-name").text("ข้าวกล้องมะลิแดง 100% ตรา ดอกบัว");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c61243987335e545710d_BLT_HT_Red.webp"></img>');
        $(".result-description").text("อุดมธาตุเหล็กและทองแดงที่ช่วยบำรุงเลือด มีวิตามิน B1, B2 บำรุงสมอง บรรเทาอาการอ่อนเพลีย มีแคโรทิน ช่วยบำรุงสายตา");
        $(".quiz-result-btn").attr('href', '/products/lts-hty-hommalired');
        break;
      case "y,6,a":
        console.log("ร่วนๆ พรีเมี่ยม");
        $(".result-name").text("ข้าวหอมผสม ตรา บัวเขียว");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358a9d908dd80d5ecd9c10b_Green_Lotus.webp"></img>');
        $(".result-description").text("ข้าวผสมระหว่างข้าวขาวนาปีกับข้าวหอม ในสัดส่วนที่พอเหมาะลงตัวในการรับประทานเหมาะสำหรับผู้ที่ชอบบริโภค ข้าวที่หุงขึ้นหม้อ นุ่ม ไม่แข็งกระด้าง ราคาคุ้มค่า เหมาะกับร้านข้าวแกงและร้านอาหารทั่วไป");
        $(".quiz-result-btn").attr('href', '/products/ltg-aro-mixed');
        break;
      case "y,6,b":
        console.log("ร่วนๆ คุณภาพ+ราคา");
        $(".result-name").text("ข้าวขาวตาแห้ง 100% ตรา ดอกบัว");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589ca381ac6f78e6ab3fe8_BuaDang.webp"></img>');
        $(".result-description").text("ข้าวนาปี ขาว เม็ดร่วน แต่ไม่แข็งกระด้าง เหมาะสำหรับผู้ที่ชอบบริโภค ข้าวที่หุงขึ้นหม้อ คุ้มค่า ราคาประหยัด เหมาะสำหรับร้านอาหารทั่วไปและร้านขายข้าวนึ่ง");
        $(".quiz-result-btn").attr('href', '/products/lts-wht-taheang100');
        break;
      case "y,6,c":
        console.log("ร่วนๆ ประหยัด");
        $(".result-name").text("ข้าวขาวเสาไห้ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63589c67db103e6591f314fb_ThaiWhiteRice.webp"></img>');
        $(".result-description").text("ข้าวขาวพันธุ์เสาไห้ ที่ได้รับการคัดสรรคุณภาพเป็นพิเศษ เมล็ดสวย ร่วน ไม่เหนียวติดกัน เหมาะสำหรับผู้ที่ชอบบริโภค ข้าวที่หุงขึ้นหม้อ คุ้มค่า ราคาประหยัด");
        $(".quiz-result-btn").attr('href', '/products/khaawth-nmali-traad-kbawbaan');
        break;
      case "y,6,d":
        console.log("ร่วนๆ สุขภาพ");
        $(".result-name").text("ข้าวหอมมันปู ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c74387c85e46acef1942_BLT_HT-Munpoo.webp"></img>');
        $(".result-description").text("อุดมไปด้วยวิตามิน B1, B2 แคลเซียม และธาตุเหล็ก รวมทั้งมีเส้นใยอาหารมากให้คุณค่าทางโภชนาการสูง มีสารต่อต้านอนุมูลอิสระ เมื่อหุงสุกจะมีสีสันสวยงามน่ารับประทาน เมื่อทานข้าวจะสัมผัสถึงเนื้อข้าวทั้งสองชนิดที่ผสมกันอย่างลงตัว");
        $(".quiz-result-btn").attr('href', '/products/blt-hty-hommunpu');
        break;
      case "y,7,a":
        console.log("เม็ดสวย พรีเมี่ยม");
        $(".result-name").text("ข้าวหอมมะลิเก่า 100% ตรา มะลิฟ้า");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/637306aff1bceb9dd348605a_BJM_JS100-p-2000.webp"></img>');
        $(".result-description").text("ข้าวเกรดพรี่เมี่ยม มีกลิ่นหอมตามธรรมชาติ เมื่อลิ้มลองจะได้ความอร่อย นุ่มละมุนกำลังดี เมล็ดข้าวขาวสวย ทานคู่กับเมนูไหนก็อร่อย");
        $(".quiz-result-btn").attr('href', '/products/bjm-jas-old100');
        break;
      case "y,7,b":
        console.log("เม็ดสวย คุณภาพ+ราคา");
        $(".result-name").text("ข้าวหอมมะลิคุณภาพ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6358aa344e55ddda153e3dad_ThaiJasmineRiceQuality.webp"></img>');
        $(".result-description").text("ผ่านการผลิตเฉพาะของตงฮั้ว เมล็ดข้าวขาวสวยเต็มเมล็ด เมื่อนำไปหุงจะมีความหอมนุ่ม อร่อย เหมาะสำหรับผู้บริโภคข้าวหอมคุณภาพดีในราคายอมเยาว์");
        $(".quiz-result-btn").attr('href', '/products/lth-jas-hommali');
        break;
      case "y,7,c":
        console.log("เม็ดสวย ประหยัด");
        $(".result-name").text("ข้าวหอม 100% ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401cdfc879d2464f324d432_LTH_AR-100.webp"></img>');
        $(".result-description").text("มีความนุ่มและมีกลิ่นหอมคล้ายข้าวหอมมะลิ เป็นทางเลือกสำหรับคนที่ชอบการรับประทานข้าวหอมที่มีความนุ่มหอมในราคาคุ้มค่า");
        $(".quiz-result-btn").attr('href', '/products/lth-aro-100');
        break;
      case "y,7,d":
        console.log("เม็ดสวย สุขภาพ");
        $(".result-name").text("ข้าวกล้องสามสี ตรา ดอกบัว");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63730ad218c742ceac33230f_LTS_HT3-p-800.webp"></img>');
        $(".result-description").text("ข้าวกล้องสามสี เป็นข้าวที่อุดมไปด้วยวิตามิน B1, B2 แคลเซียม และธาตุเหล็ก ป้องกันโรคเหน็บชา รวมทั้งมีเส้นใยอาหารมากให้คุณค่าทางโภชนาการสูง มีสารต่อต้านอนุมูลอิสระ เหมาะสำหรับคนที่รักสุขภาพ");
        $(".quiz-result-btn").attr('href', '/products/lts-hty-healthy');
        break;
      case "y,8,a":
        console.log("หอมพิเศษ พรีเมี่ยม");
        $(".result-name").text("ข้าวหอมมะลิใหม่ 100% ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c66496905f79e4a7c64b_BLT_JS100.webp"></img>');
        $(".result-description").text("จัดเก็บภายใต้อุณหภูมิที่ต่ำกว่า 15°C เพื่อคงความสดใหม่ เมล็ดข้าวสวยใส มีกลิ่นหอมธรรมชาติ เหมาะกับผู้ที่ชอบทานข้าวหอมมะลิที่มีความหอม นุ่ม เหนียว");
        $(".quiz-result-btn").attr('href', '/products/blt-jas-new100');
        break;
      case "y,8,b":
        console.log("หอมพิเศษ คุณภาพ+ราคา");
        $(".result-name").text("ข้าวหอมมะลิ ตรา ดอกดาวเรืองส้ม");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c689936d322f9c9bd3e5_CDO_JS100.webp"></img>');
        $(".result-description").text("ราคาคุ้มค่า รสชาติอร่อย หอมนุ่มถูกใจ เหมาะสำหรับร้านอาหารที่ต้องการข้าวหอมมะลิแท้คุณภาพดี ในราคาประหยัด หรือเหมาะกับร้านอาหารทุกๆ ประเภท");
        $(".quiz-result-btn").attr('href', '/products/cdo-jas-hommali');
        break;
      case "y,8,c":
        console.log("หอมพิเศษ ประหยัด");
        $(".result-name").text("ข้าวหอมสุรินทร์ ตรา ดอกบัว รุ่นลายไทย");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/63d8d20d7de2b7bdcfd2ed72_HomSurin.png"></img>');
        $(".result-description").text("ผ่านการคัดสรรคุณภาพอย่างใส่ใจ เมื่อนำไปหุงเป็นข้าวสวยจะมีความนุ่ม อร่อย น่าทาน เหมาะสำหรับผู้บริโภคข้าวหอมที่ราคาย่อมเยาว์และร้านอาหารทั่วไป");
        $(".quiz-result-btn").attr('href', '/products/lth-aro-surin');
        break;
      case "y,8,d":
        console.log("หอมพิเศษ สุขภาพ");
        $(".result-name").text("ข้าวหอมมันปู ตรา ดอกบัวบาน");
        $(".product-img-object.quiz-img").replaceWith('<img class="product-img-object quiz-img" src="https://uploads-ssl.webflow.com/629732c7c0e1401011449adc/6401c74387c85e46acef1942_BLT_HT-Munpoo.webp"></img>');
        $(".result-description").text("อุดมไปด้วยวิตามิน B1, B2 แคลเซียม และธาตุเหล็ก รวมทั้งมีเส้นใยอาหารมากให้คุณค่าทางโภชนาการสูง มีสารต่อต้านอนุมูลอิสระ เมื่อหุงสุกจะมีสีสันสวยงามน่ารับประทาน เมื่อทานข้าวจะสัมผัสถึงเนื้อข้าวทั้งสองชนิดที่ผสมกันอย่างลงตัว");
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