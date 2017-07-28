$(function() {
    refreshNews('');

    //添加新闻
    $('#submit-btn').click(function() {
        //验证表单内容
        if ($('#newstype').val() === '' || $('#newstitle').val() === '' || $('#newsimg').val() === '' || $('#newstime').val() === '' || $('#newssrc').val() === '') {

            if ($('#newstype').val() === '') {
                $('#newstype').parent().addClass('has-error');
            } else {
                $('#newstype').parent().removeClass('has-error');
            }

            if ($('#newstitle').val() === '') {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }

            if ($('#newsimg').val() === '') {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }

            if ($('#newstime').val() === '') {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }

            if ($('#newssrc').val() === '') {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }
        } else {
            var jsonNews = {
                newstype: $('#newstype').val(),
                newstitle: $('#newstitle').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val(),
            }
            $.ajax({
                url: 'admin/insert',
                type: 'POST',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                    console.log(data);
                    refreshNews('');
                }
            })
        }
    })

    //删除新闻
    var deleteId;
    $('#confirm-delete-btn').click(function() {
        $.ajax({
            url: '/admin/delete',
            type: 'POST',
            data: { newsid: deleteId },
            datatype: 'json',
            success: function(date) {
                console.log('delete success');
                refreshNews('');
                $('#deleteModal').modal('hide');
            }
        })
    })

    //修改新闻
    var enewsId;
    $('#confirm-edit-btn').click(function() {
        var jsonNews = {
            newsid: enewsId,
            newstype: $('#enewstype').val(),
            newstitle: $('#enewstitle').val(),
            newsimg: $('#enewsimg').val(),
            newstime: $('#enewstime').val(),
            newssrc: $('#enewssrc').val(),
        }
        $.ajax({
            url: '/admin/update',
            type: 'POST',
            data: jsonNews,
            datatype: "json",
            success: function(data) {
                console.log('update success');
                $('#editModal').modal('hide');
                refreshNews('');
            }
        })
    })


    function refreshNews(newsType) {
        $.ajax({
            url: '/admin/getnews',
            type: 'GET',
            data: { newstype: newsType },
            datatype: 'json',
            success: function(data) {
                var $tbody = $('#news-lists tbody');
                $tbody.empty();
                for (var i = 0; i < data.length; i++) {
                    var $row = $('<tr>').attr('id', data[i].id).appendTo($tbody),
                        $id = $('<tr>').text(data[i].id).appendTo($row),
                        $type = $('<td>').text(data[i].newstype).appendTo($row),
                        $title = $('<td>').text(data[i].newstitle).appendTo($row),
                        $src = $('<td>').text(data[i].newssrc).appendTo($row),
                        $img = $('<td>').text(data[i].newsimg).appendTo($row),
                        $time = $('<td>').text(data[i].newstime).appendTo($row);
                    var $edit = $('<a>').text('编辑').attr({
                            href: '',
                            'data-Toggle': 'modal',
                            'data-Target': '#editModal'
                        }),
                        $delete = $('<a>').text('删除').attr({
                            href: '',
                            'data-Toggle': 'modal',
                            'data-Target': '#deleteModal',
                        }).addClass('delete-btn');
                    $row.append($('<td>').append($edit).append($delete));

                    $delete.click(function() {
                        deleteId = $(this).parent().parent().attr('id');
                    });
                    $edit.click(function() {
                        //edit表格中显示本条新闻的信息：
                        //可以用请求获取，也可以直接从dom中获取
                        enewsId = $(this).parent().parent().attr('id');
                        $.ajax({
                            url: '/admin/edit',
                            type: 'GET',
                            data: { enewsId: enewsId },
                            datatype: "json",
                            success: function(data) {
                                console.log(data);
                                $('#enewstype').val(data[0].newstype);
                                $('#enewstitle').val(data[0].newstitle);
                                $('#enewsimg').val(data[0].newsimg);
                                $('#enewstime').val(data[0].newstime.split('T')[0]);
                                $('#enewssrc').val(data[0].newssrc);
                            }
                        })
                    })
                }

            },
            error: function() {
                console.log('requet fail');
            }
        })
    }
})
