/**
 * Created by Administrator on 2015/12/15.
 */
function _scrollVertical(optional,callback) {
    var startPos,
        endPos,
        isScrolling,
        slider = document.getElementById(optional.id);
    var start = function (event) {
        var touch = event.targetTouches[0]; //touches�����������Ļ�����е�touch��ȡ��һ��touch
        startPos = {x: touch.pageX, y: touch.pageY, time: +new Date}; //ȡ��һ��touch������ֵ
        slider.addEventListener('touchmove', move, false);
        slider.addEventListener('touchend', end, false);
    };
    var move = function (event) {
//����Ļ�ж��touch����ҳ�汻���Ź����Ͳ�ִ��move����
        if (event.targetTouches.length > 1 || event.scale && event.scale !== 1)return;

        var touch = event.targetTouches[0];
        endPos = {x: touch.pageX - startPos.x, y: touch.pageY - startPos.y};
        isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1 : 0; //isScrollingΪ1ʱ����ʾ���򻬶���0Ϊ���򻬶�
        if (isScrolling === 1) {
            //event.preventDefault();
        }
    };
    var end = function (event) {
        var duration = +new Date - startPos.time; //�����ĳ���ʱ��
        if (isScrolling === 1) { //��Ϊ�������ʱ
            if (Number(duration) > 10) {
//�ж������ƻ������ƣ���ƫ��������10ʱִ��
                if (endPos.y > 10) {
                    callback();
                }
            }
        }
//����¼�
        slider.removeEventListener('touchmove', move);
        slider.removeEventListener('touchend', end);
    };

    var touch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
    if (!!touch)
        slider.addEventListener('touchstart', start);
}