����

    �ƶ�ǰ������һֱ���źܶ��ˣ����Լ�Ҳ�Ǵ������ý���ѯ���������İٷֱȣ��ٵ�padding-top���������������ٵ�css3�µ�λvw���ֹ���ת�� ����Щ�������ٻ���Щ���⣬ֱ��ʹ���˶�̬rem ������������������������Ϸ��� ֻ��Ϊ�ж�̬rem ����Ϊ��������������������Ļ�Ĵ�С���仯�ġ�

rem
rem�ٷ������� font size of the root element ������˼���� ��Ԫ�ص�font-sizeֵ Ҳ����rem�������Ԫ�ص�

���´���

<html>
  <meta charset="utf-8"/>
  <head>
    <style>
       html{ font-size:10px;}
       .p1{font-size:1rem;}
        .p2{ font-size:2rem;}
    </style>
   </head>
   <body>
      <p class="p1">����һ��1rem����</p>
      <p class="p2">����һ��2rem������</p>
   </doby>
</html>

������Ч�����Կ����ĵ���Ԫ�ص������С�ǻ���html��Ԫ�ص� p1��font-sizeΪ10px p2��font-size��20px
viewport

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

���ƶ�����ʱ���Ƕ�����������δ���

    viewport :���ⴰ�ڴ�С
    width: ����viewport��С �����Լ��趨ֵ��320px(������) һ������Ϊdevice-width(�豸���)
    initial-scale ��ʼ���ű��� ��ҳ����μ���ʱ�����ű���Ĭ��Ϊ1
    maximum-scale���û������ŵ���������

dpr(device pixel ratio)

�豸���ر�dpr Ҫ�˽���һ��������������������

    �豸��������
    ͨ�׵Ľ��豸��Ļ�ж��ٸ�������˸�ĵ� ��һ������ĸ��� ����iphone6�������750�����Ըı���ɫ�ĵ� ��������ӻ� ���������10��ǰ��Ĵ�ͷ���ӣ���ſ����Ļǰ��ϸ���ܿ���һ����RGB�ĵ� ������豸����������
    �豸��������

    �豸����������һ������ĸ��������е�css �������ǽ�һ��div�������Ϊ10���� ��ô��pc��ϵͳ�Ὣ���div��ʾ����Ļ��10������

        dpr = �豸��������/�豸��������

        �����е�1pxռ���豸�ϵļ�����С����������ô���

        iphone3G �豸��������320���� �豸��������320px ��ôdpr����1

        iphone6 �豸��������750���� �豸��������375px ��ôdpr����2

        Ҳ��������css��д��1px��ʵ�������豸ʵ���ϵ���1px Ҳ���ܵ����豸�ϵ�2px

        ����dpr���ǾͿ����������ƶ�������ҳ�����

        ����ͨ��window.devicePixelRatio����ȡdpr

��̬rem

    ͨ�������rem,viewport,�Լ�dpr���ǾͿ���������ǵ��ռ������ˣ��������д�� ��������д�� ����֪�����豸��dpr�Ϳ�����ȷ��֪�����Ŷ��٣���������������˺��ѽ����1px���ߵ�����

������Ҫ����һ��js����

(function (doc, win) {
 console.log("dpr:"+win.devicePixelRatio);
 var docEle = doc.documentElement,
 isIos = navigator.userAgent.match(/iphone|ipod|ipad/gi),
 dpr=Math.min(win.devicePixelRatio, 3);
 scale = 1 / dpr,

 resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

 docEle.dataset.dpr = dpr;

 var metaEle = doc.createElement('meta');
 metaEle.name = 'viewport';
 metaEle.content = 'initial-scale=' + scale + ',maximum-scale=' + scale;
 docEle.firstElementChild.appendChild(metaEle);


 var recalCulate = function  {
 var width = docEle.clientWidth;
 if (width / dpr > 640) {
 width = 640 * dpr;
 }
 docEle.style.fontSize = 20 * (width / 750) + 'px';
 };

 recalCulate

 if (!doc.addEventListener) return;
 win.addEventListener(resizeEvent, recalCulate, false);
        })(document, window);

    ��ȡ�豸dpr
    ������ű��� scale = 1/dpr
    ����meta�Լ�����
    ��scaleֵ����initial-scale��maximum-scale
    meta���뵽�ĵ���
    ������Ļ��С�ı����¼��㺯��������

����Ч��

ʹ��sassͬ��psd

�������õ�psd��ʱ�����Ҫ��psd��ͼ�ߴ�ת��Ϊrem��֮ǰһ��ͬ����һ���ܺõķ���������ȫ����psd�ĵĳߴ�����д����Ҫ�õ�sass��ʹ��sass���Դ����߿���Ч�ʣ�������sass��һ��mixin������rem��px����ת�� ����hotcss.scss

@function px2rem( $px ){
    @return $px*750/$designWidth/20 + rem; //����ǲ��Ǹо�����Ϥ �����ʵ��������Ƕ�js�Ƕ�Ӧ��
}
$designWidth : 750; //�����ͼ��750

�����ǵ�style.scss��

@import 'px2rem.scss';
$designWidth : 750; //�����ͼ��750
.banner{width:px2rem(300)}//����Ƹ��ϵ�banner��300px ����ȥ���㻷��