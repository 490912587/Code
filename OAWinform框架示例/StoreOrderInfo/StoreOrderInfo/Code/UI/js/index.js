$(function () {
 
        //1.��ʼ��Table
        var oTable = new TableInit();
        oTable.Init();
 
        //2.��ʼ��Button�ĵ���¼�
        /* var oButtonInit = new ButtonInit();
        oButtonInit.Init(); */
 
    });
 
 
    var TableInit = function () {
        var oTableInit = new Object();
        //��ʼ��Table
        oTableInit.Init = function () {
            $('#tradeList').bootstrapTable({
                url: '/VenderManager/TradeList',         //�����̨��URL��*��
                method: 'post',                      //����ʽ��*��
                toolbar: '#toolbar',                //���߰�ť���ĸ�����
                striped: true,                      //�Ƿ���ʾ�м��ɫ
                cache: false,                       //�Ƿ�ʹ�û��棬Ĭ��Ϊtrue������һ���������Ҫ����һ��������ԣ�*��
                pagination: true,                   //�Ƿ���ʾ��ҳ��*��
                sortable: false,                     //�Ƿ���������
                sortOrder: "asc",                   //����ʽ
                queryParams: oTableInit.queryParams,//���ݲ�����*��
                sidePagination: "server",           //��ҳ��ʽ��client�ͻ��˷�ҳ��server����˷�ҳ��*��
                pageNumber:1,                       //��ʼ�����ص�һҳ��Ĭ�ϵ�һҳ
                pageSize: 50,                       //ÿҳ�ļ�¼������*��
                pageList: [10, 25, 50, 100],        //�ɹ�ѡ���ÿҳ��������*��
                strictSearch: true,
                clickToSelect: true,                //�Ƿ����õ��ѡ����
                height: 460,                        //�иߣ����û������height���ԣ�����Զ����ݼ�¼�������ñ��߶�
                uniqueId: "id",                     //ÿһ�е�Ψһ��ʶ��һ��Ϊ������
                cardView: false,                    //�Ƿ���ʾ��ϸ��ͼ
                detailView: false,                   //�Ƿ���ʾ���ӱ�
                columns: [{
                    field: 'id',
                    title: '���'
                }, {
                    field: 'liushuiid',
                    title: '���ױ��'
                }, {
                    field: 'orderid',
                    title: '������'
                }, {
                    field: 'receivetime',
                    title: '����ʱ��'
                }, {
                    field: 'price',
                    title: '���'
                }, {
                    field: 'coin_credit',
                    title: 'Ͷ��Ӳ��'
                },  {
                    field: 'bill_credit',
                    title: 'Ͷ��ֽ��'
                },  {
                    field: 'changes',
                    title: '����'
                }, {
                    field: 'tradetype',
                    title: '��������'
                },{
                    field: 'goodmachineid',
                    title: '������'
                },{
                    field: 'inneridname',
                    title: '������'
                },{
                    field: 'goodsName',
                    title: '��Ʒ����'
                }, {
                    field: 'changestatus',
                    title: '֧��'
                },{
                    field: 'sendstatus',
                    title: '����'
                },]
            });
        };
 
        //�õ���ѯ�Ĳ���
      oTableInit.queryParams = function (params) {
            var temp = {   //����ļ������ֺͿ������ı���������һֱ����߸Ķ���������Ҳ��Ҫ�ĳ�һ����
                limit: params.limit,   //ҳ���С
                offset: params.offset,  //ҳ��
                sdate: $("#stratTime").val(),
                edate: $("#endTime").val(),
                sellerid: $("#sellerid").val(),
                orderid: $("#orderid").val(),
                CardNumber: $("#CardNumber").val(),
                maxrows: params.limit,
                pageindex:params.pageNumber,
                portid: $("#portid").val(),
                CardNumber: $("#CardNumber").val(),
                tradetype:$('input:radio[name="tradetype"]:checked').val(),
                success:$('input:radio[name="success"]:checked').val(),
            };
            return temp;
        };
        return oTableInit;
    };