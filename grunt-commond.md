1�����Ȱ�װ���µ�node.js(�Դ���npm)
2��ȫ�ְ�װgrunt-cli
>>npm install grunt-cli -g
3��cd����Ŀ��Ŀ¼
3.1������package.json�ļ������ִ��:
>>npm install
3.2��û��package.json�ļ����������ִ��(������Ļ��ʾ�ش�����ģ������ƺͰ汾����):
>>npm init
Ȼ��ͨ��package.json�ļ�����devDependencies���Ի���ִ��:
>>npm install <module> --save-dev(�ǵ����Ȱ�װgruntģ�飬--save-dev���Զ���ģ����/�汾����package.json�ļ�)
ʾ��:
npm install grunt --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-watch --save-dev
4��ִ��ģ������
4.1��Ĭ��������ĳ��ģ��
>>grunt <moduleName>
4.2��ִ��ĳ������
>>grunt <taskName>