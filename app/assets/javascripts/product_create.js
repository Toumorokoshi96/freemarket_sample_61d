let CategorySelectBoxHTML = `
<div class="select-wrap">
  <i class="icon-arrow-bottom"></i>
  <select class="select-default" name="product[categry]" id="product_categry"><option value="">---</option>
  <option value="レディース">レディース</option>
  <option value="メンズ">メンズ</option>
  <option value="ベビー・キッズ">ベビー・キッズ</option>
  <option value="インテリア・住まい・小物">インテリア・住まい・小物</option>
  <option value="本・音楽・ゲーム">本・音楽・ゲーム</option>
  <option value="おもちゃ・ホビー・グッズ">おもちゃ・ホビー・グッズ</option>
  <option value="コスメ・香水・美容">コスメ・香水・美容</option>
  <option value="家電・スマホ・カメラ">家電・スマホ・カメラ</option>
  <option value="スポーツ・レジャー">スポーツ・レジャー</option>
  <option value="ハンドメイド">ハンドメイド</option>
  <option value="チケット">チケット</option>
  <option value="自動車・オートバイ">自動車・オートバイ</option>
  <option value="その他">その他</option></select>
</div>`

let DeliveryMethodSelectBoxHTML = `
<div class="form-input-t">
  <label>
    配送料の負担
    <span class="must-filled-mark-t">
      必須
    </span>
  </label>
  <div class="select-wrap">
    <i class="icon-arrow-bottom"></i>
    <select class="select-default" name="product[delivery_method]" id="product_delivery__method">
    <option value="">---</option>
    <option value="5">未定</option>
    <option value="14">らくらくメルカリ便</option>
    <option value="6">ゆうメール</option>
    <option value="8">レターパック</option>
    <option value="9">普通郵便(定形、定形外)</option>
    <option value="10">クロネコヤマト</option>
    <option value="11">ゆうパック</option>
    <option value="13">クリックポスト</option>
    <option value="7">ゆうパケット</option></select>
  </div>
</div>`


$(document).on('turbolinks:load', function(){
  //手数料と利益の計算
  $('#product_price').on('keyup', function(e){
    let product_fee_rate = 0.1
    let product_price = $('#product_price').val();
    let product_fee = Math.floor(product_price * product_fee_rate);
    let product_gain = product_price - product_fee;
    $('#product-fee').html(product_fee);
    $('#product-gain').html(product_gain);
  });  

  $('#product_categry').change(function() {
    let selection = $('option:selected').val();
    console.log(selection);
    $('#product_categry').after(CategorySelectBoxHTML);
    if (!selection) {
      console.log('default');
    }
  });

  $('#product_delivery_fee').change(function() {
    let selection = $('option:selected').val();
    console.log(selection);
    $('#product_delivery_fee').after(DeliveryMethodSelectBoxHTML);
    if (!selection) {
      console.log('default');
    }
  });
});