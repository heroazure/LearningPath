/**
 * Created by heroxiao on 2016/5/27.
 */
var webpack=require('webpack')
module.exports={
    entry:'./webpackdemo/enter.js',
    output:{
        path:'./webpackdemo/',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/, loader: 'style!css'
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('创建by heroxiao')
    ],
    resolve: {
        //����module�Ļ������￪ʼ����
        root: './webpackdemo/', //����·��
        //�Զ���չ�ļ���׺������ζ������requireģ�����ʡ�Բ�д��׺��
        //extensions: ['', '.js', '.json', '.scss'],
        //ģ��������壬�������ֱ�����ñ����������д�����ĵ�ַ
        alias: {
            module1 : 'module1.js',//����ֱ�� require('module1') ����
            module2 : 'module2.js',//����ֱ�� require('module1') ����
            module3 : 'module3.js',//����ֱ�� require('module1') ����
            paginate : 'vue-paginate.min.js'//����ֱ�� require('module1') ����
        }
    }
}