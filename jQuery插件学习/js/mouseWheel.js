/**
 * Created by Administrator on 2015/9/17.
 */
+function ($) {
    $.extend({
        upordown: function (e) {//�������Ϲ�������1�����·���-1
            e=e || window.event;

            if(e.wheelDelta){//IE/Opera/Chrome���Ϸ���120�����·���-120
               return e.wheelDelta>0?1:-1;
            }else if(e.detail){//Firefox���Ϸ���-3�����·���3
               return e.detail<0?1:-1;
            }
        }
    });
}(jQuery);