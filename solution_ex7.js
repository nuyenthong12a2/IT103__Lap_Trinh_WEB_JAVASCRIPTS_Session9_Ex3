
const rooms = [
  { roomId: "P101", roomType: "Standard", pricePerNight: 800000, status: "VACANT" },
  { roomId: "P102", roomType: "Deluxe", pricePerNight: 1500000, status: "OCCUPIED" },
  { roomId: "P103", roomType: "Superior", pricePerNight: 1100000, status: "MAINTENANCE" }
];


console.log("\n=== DANH SÁCH PHÒNG BAN ĐẦU ===");
console.log("Mã phòng | Loại phòng | Giá/đêm (VNĐ) | Trạng thái");
for (let i = 0; i < rooms.length; i++) {
  console.log(rooms[i].roomId + " | " + rooms[i].roomType + " | " +
              rooms[i].pricePerNight + " | " + rooms[i].status);
}
console.log("Tổng số phòng: " + rooms.length);

// ===== 1. CREATE: thêm phòng P104 =====
const newRoom = { roomId: "P104", roomType: "VIP Suite", pricePerNight: 3500000, status: "VACANT" };

// Kiểm tra trùng mã phòng trước khi thêm
let isDuplicate = false;
for (let i = 0; i < rooms.length; i++) {
  if (rooms[i].roomId === newRoom.roomId) {
    isDuplicate = true;
  }
}
if (isDuplicate) {
  console.log("Lỗi: phòng " + newRoom.roomId + " đã tồn tại.");
} else {
  rooms.push(newRoom);
}

console.log("\n=== SAU KHI THÊM PHÒNG P104 ===");
console.log("Mã phòng | Loại phòng | Giá/đêm (VNĐ) | Trạng thái");
for (let i = 0; i < rooms.length; i++) {
  console.log(rooms[i].roomId + " | " + rooms[i].roomType + " | " +
              rooms[i].pricePerNight + " | " + rooms[i].status);
}
console.log("Tổng số phòng: " + rooms.length);

// ===== 2. UPDATE: P101 check-in (VACANT -> OCCUPIED) =====
const updateId = "P101";
const newStatus = "OCCUPIED";

if (newStatus !== "VACANT" && newStatus !== "OCCUPIED" && newStatus !== "MAINTENANCE") {
  console.log("Lỗi: trạng thái '" + newStatus + "' không hợp lệ.");
} else {
  // Tìm vị trí phòng theo roomId (-1 nghĩa là chưa tìm thấy)
  let updateIndex = -1;
  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === updateId) {
      updateIndex = i;
    }
  }
  if (updateIndex === -1) {
    console.log("Lỗi: không tìm thấy phòng " + updateId + ".");
  } else {
    rooms[updateIndex].status = newStatus;
  }
}

console.log("\n=== SAU KHI P101 CHECK-IN (OCCUPIED) ===");
console.log("Mã phòng | Loại phòng | Giá/đêm (VNĐ) | Trạng thái");
for (let i = 0; i < rooms.length; i++) {
  console.log(rooms[i].roomId + " | " + rooms[i].roomType + " | " +
              rooms[i].pricePerNight + " | " + rooms[i].status);
}
console.log("Tổng số phòng: " + rooms.length);


const deleteId = "P103";

let deleteIndex = -1;
for (let i = 0; i < rooms.length; i++) {
  if (rooms[i].roomId === deleteId) {
    deleteIndex = i;
  }
}
if (deleteIndex === -1) {
  console.log("Lỗi: không tìm thấy phòng " + deleteId + ".");
} else {
  rooms.splice(deleteIndex, 1);
}

console.log("\n=== SAU KHI XÓA PHÒNG P103 ===");
console.log("Mã phòng | Loại phòng | Giá/đêm (VNĐ) | Trạng thái");
for (let i = 0; i < rooms.length; i++) {
  console.log(rooms[i].roomId + " | " + rooms[i].roomType + " | " +
              rooms[i].pricePerNight + " | " + rooms[i].status);
}
console.log("Tổng số phòng: " + rooms.length);