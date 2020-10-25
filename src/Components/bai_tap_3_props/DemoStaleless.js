// state less components là component function (react function component)
//cú pháp tạo mẫu tự động : rfc => enter
import React from 'react'

export default function DemoStaleless() {

    // bên trong lệnh return của function component là nội dung giao diện của thẻ này . lưu ý : nội dụng component phải được bao phủ bởi 1 thẻ bất kỳ.
    // <> </> là thẻ vô hình dùng để bao nội dung mà ko muốn dùng thẻ có tên
    return (
        <div className="container">
            <div className="card text-white bg-primary w-25">
                <img className="card-img-top" src="https://picsum.photos/200/200" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        </div>
    )
}
