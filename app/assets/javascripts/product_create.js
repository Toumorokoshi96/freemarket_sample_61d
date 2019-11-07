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
    配送の方法
    <span class="must-filled-mark-t">
      必須
    </span>
  </label>
  <div class="select-wrap">
    <i class="icon-arrow-bottom"></i>
    <select class="select-default" name="product[delivery_method]" id="product_delivery_method">
    <option value="未定">未定</option>
    <option value="らくらくメルカリ便">らくらくメルカリ便</option>
    <option value="ゆうメール">ゆうメール</option>
    <option value="レターパック">レターパック</option>
    <option value="普通郵便(定形、定形外)">普通郵便(定形、定形外)</option>
    <option value="クロネコヤマト">クロネコヤマト</option>
    <option value="ゆうパック">ゆうパック</option>
    <option value="クリックポスト">クリックポスト</option>
    <option value="ゆうパケット">ゆうパケット</option></select>
  </div>
</div>`


$(document).on('turbolinks:load', function(){
  let fileForms = $("[type=file]");
  $(fileForms).hide();
  // let labelIdNum = 0;

  // $(labelIdValue).change(function(e){
  //   //$(this).show();
  //});
//画像がアップローダされたらhidden属性でproduct_image: count:の値を付与
  $("[id ^='product_product_images_attributes_']").change(function() {
    //アップロードされたinputタグのidから数字部分を取り出す
    let productImageNum = $(this).attr('id').replace(/[^0-9]/g, '');//数字でない部分を空白へ置換=削除
    productImageNum = Number(productImageNum);//文字列型なので数値型へ変換
    let labelIdValue = '#product_product_images_attributes_'+productImageNum+'_product_image';
    let ProductImageCountAttrHTML = `
    <input type="hidden" 
    name="product[product_images_attributes][${productImageNum}][count]" 
    value=${productImageNum}>
    `;

    $(labelIdValue).show();
    $(this).show();
    $(this).after(ProductImageCountAttrHTML);
    //ラベルが指すアップローダーを変更
    if (productImageNum <= 9){
      let label = $("label [id ^='product_product_images_attributes_']");
      let incrementedProductImageNum = productImageNum + 1;
      let incrementedId = '#product_product_images_attributes_'+incrementedProductImageNum+'_product_image';
      console.log(incrementedId);
      $("label [id ^='product_product_images_attributes_']").attr('id', incrementedId);
      //書き換え
      console.log('meow');
    // let label = $("label [id ^='product_product_images_attributes_']");
    }
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

  //手数料と利益の計算
  $('#product_price').on('keyup', function(e){
    let product_fee_rate = 0.1
    let product_price = $('#product_price').val();
    let product_fee = Math.floor(product_price * product_fee_rate);
    let product_gain = product_price - product_fee;
    $('#product-fee').html(product_fee);
    $('#product-gain').html(product_gain);
  });

});