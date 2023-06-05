class ErrorHandler extends Error {
    constructor(message, statusCode) {
      super(message); // Gọi constructor của lớp cha (Error) và truyền vào thông báo lỗi
      this.statusCode = statusCode; // Lưu trạng thái mã lỗi
      Error.captureStackTrace(this, this.constructor); // Lấy ngăn xếp lời gọi của lỗi
    }
  }
  
  module.exports = ErrorHandler;