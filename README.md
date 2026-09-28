# BrewLite

> Ứng dụng đặt cà phê không tiền mặt – Đồ án môn Công nghệ Phần mềm

BrewLite là ứng dụng web hỗ trợ khách hàng xem menu, tùy chỉnh sản phẩm, quản lý giỏ hàng, đặt món và thanh toán không tiền mặt.

Project được xây dựng theo kiến trúc Frontend – Backend – Database và phát triển theo mô hình Agile Scrum.

---

## 1. Thông tin dự án

| Thành phần      | Công nghệ        |
| --------------- | ---------------- |
| Frontend        | Next.js          |
| Backend         | NestJS           |
| Ngôn ngữ        | TypeScript       |
| Database        | PostgreSQL       |
| ORM             | Prisma           |
| API             | REST API         |
| Styling         | Tailwind CSS     |
| Authentication  | JWT              |
| Package Manager | npm              |
| Version Control | Git / GitHub     |

### Port cấu hình

| Service            | Port | URL                   |
| ------------------ | ---: | --------------------- |
| Frontend – Next.js | 3000 | http://localhost:3000 |
| Backend – NestJS   | 3001 | http://localhost:3001 |

---

## 2. Chức năng chính

BrewLite tập trung vào quy trình đặt cà phê không tiền mặt.

### MVP (Minimum Viable Product)

1. Xem menu sản phẩm
2. Xem chi tiết sản phẩm
3. Chọn size
4. Chọn topping
5. Thêm sản phẩm vào giỏ hàng
6. Quản lý giỏ hàng
7. Tính tổng tiền
8. Đăng ký / đăng nhập
9. Tạo đơn hàng
10. Thanh toán không tiền mặt
11. Hiển thị thông tin xác nhận đơn hàng
12. Xem lịch sử đơn hàng

---

## 3. Luồng sử dụng chính

```text
Mở ứng dụng
     ↓
Xem Menu
     ↓
Chọn sản phẩm
     ↓
Xem chi tiết sản phẩm
     ↓
Chọn Size / Topping
     ↓
Thêm vào giỏ hàng
     ↓
Kiểm tra giỏ hàng và tổng tiền
     ↓
Đăng nhập / Đăng ký nếu cần
     ↓
Thanh toán không tiền mặt
     ↓
Xác nhận đơn hàng
     ↓
Nhận đồ uống
```

---

## 4. Kiến trúc hệ thống

BrewLite sử dụng kiến trúc phân tầng Frontend – Backend – Database.

```text
┌──────────────────────────────┐
│          Next.js             │
│        Frontend :3000        │
│                              │
│  React + TypeScript          │
│  Tailwind CSS                │
└──────────────┬───────────────┘
               │
               │ REST API
               │
               ▼
┌──────────────────────────────┐
│          NestJS              │
│         Backend :3001        │
│                              │
│  Controllers                 │
│  Services                    │
│  Authentication              │
│  Business Logic              │
└──────────────┬───────────────┘
               │
               │ ORM
               ▼
┌──────────────────────────────┐
│        PostgreSQL            │
│           Database           │
└──────────────────────────────┘
```

- **Frontend:** Chịu trách nhiệm giao diện và tương tác với người dùng.
- **Backend:** Chịu trách nhiệm xử lý API, business logic, authentication và giao tiếp với database.
- **Database:** Chịu trách nhiệm lưu trữ và quản lý tính toàn vẹn dữ liệu của hệ thống.

---

## 5. Cấu trúc thư mục

```text
CNPM/
│
├── backend/
│   ├── src/
│   │   ├── app.controller.ts
│   │   ├── app.service.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   │
│   ├── test/
│   ├── package.json
│   ├── tsconfig.json
│   └── nest-cli.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   └── app/
│   │       ├── page.tsx
│   │       ├── layout.tsx
│   │       └── globals.css
│   │
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.ts
│
├── .env.example
├── .gitignore
└── README.md
```

---

## 6. Yêu cầu môi trường

Để chạy project cần cài đặt sẵn:

- Node.js (khuyến nghị phiên bản LTS mới nhất)
- npm
- Git
- PostgreSQL

Kiểm tra phiên bản các công cụ:

```bash
node -v
npm -v
git --version
```

---

## 7. Cài đặt project

Clone repository:

```bash
git clone https://github.com/Shyn4411/CNPM.git
cd CNPM
```

---

## 8. Cấu hình Environment

Tạo file `.env` dựa trên `.env.example`:

```bash
cp .env.example .env
```

_(Trên Windows có thể copy và đổi tên thủ công trong thư mục dự án)_

Nội dung mẫu file `.env.example`:

```env
# Database
DATABASE_URL=

# Authentication
JWT_SECRET=

# API
NEXT_PUBLIC_API_URL=http://localhost:3001
```

> **Lưu ý:** Tuyệt đối không commit file `.env` chứa thông tin thật lên GitHub.

---

## 9. Chạy Backend – NestJS

Mở terminal tại thư mục backend:

```bash
cd backend
npm install
npm run start:dev
```

Backend chạy tại: [http://localhost:3001](http://localhost:3001)

---

## 10. Chạy Frontend – Next.js

Mở một terminal khác:

```bash
cd frontend
npm install
npm run dev
```

Frontend chạy tại: [http://localhost:3000](http://localhost:3000)

---

## 11. Chạy Frontend và Backend đồng thời

Cần mở hai cửa sổ terminal riêng biệt:

### Terminal 1 – Backend

```bash
cd D:\VSC\CNPM\backend
npm run start:dev
```

URL: [http://localhost:3001](http://localhost:3001)

### Terminal 2 – Frontend

```bash
cd D:\VSC\CNPM\frontend
npm run dev
```

URL: [http://localhost:3000](http://localhost:3000)

---

## 12. Danh sách API dự kiến

Frontend giao tiếp với Backend thông qua REST API (Base URL: `http://localhost:3001`).

| Method | Endpoint          | Chức năng              |
| ------ | ----------------- | ---------------------- |
| `GET`  | `/products`       | Lấy danh sách sản phẩm |
| `GET`  | `/products/:id`   | Lấy chi tiết sản phẩm  |
| `POST` | `/orders`         | Tạo đơn hàng           |
| `POST` | `/auth/register`  | Đăng ký tài khoản      |
| `POST` | `/auth/login`     | Đăng nhập tài khoản    |
| `POST` | `/payments`       | Thanh toán đơn hàng    |
| `GET`  | `/orders/history` | Xem lịch sử đơn hàng   |

_Các endpoint sẽ được hoàn thiện theo tiến độ từng task._

---

## 13. Các màn hình chính

### 13.1. Menu

- Hiển thị danh sách sản phẩm theo danh mục.
- Hiển thị hình ảnh, tên sản phẩm, giá gốc và mô tả cơ bản.

### 13.2. Product Detail

- Xem thông tin chi tiết và thành phần món.
- Chọn size (S / M / L).
- Chọn topping đi kèm.
- Cập nhật giá theo tùy chọn theo thời gian thực.
- Thêm sản phẩm vào giỏ hàng.

### 13.3. Cart

- Quản lý các món đã chọn trong giỏ.
- Tăng/giảm số lượng hoặc xóa sản phẩm.
- Xem tổng tiền tạm tính.

### 13.4. Payment

- Xác nhận lại danh sách món và địa chỉ/bàn nhận.
- Chọn phương thức thanh toán không tiền mặt.
- Thực hiện gửi yêu cầu thanh toán.

### 13.5. Confirmation

- Hiển thị trạng thái đơn hàng (Thành công / Chờ xử lý).
- Cung cấp mã đơn hàng (Order ID) để nhận món.
- Nút điều hướng xem lịch sử đơn hàng.

---

## 14. Tiến độ phát triển (Scrum Tasks)

| Task        | Nội dung                              |    Trạng thái     |
| ----------- | ------------------------------------- | :---------------: |
| **Task 1**  | Khởi tạo project và cấu trúc thư mục  | 🔄 Đang thực hiện |
| **Task 2**  | Xây dựng API `GET /products`          | ⏳ Chưa thực hiện |
| **Task 3**  | Frontend gọi API và hiển thị Menu     | ⏳ Chưa thực hiện |
| **Task 4**  | Màn hình Product Detail & Tùy chỉnh   | ⏳ Chưa thực hiện |
| **Task 5**  | Quản lý Giỏ hàng (Cart)               | ⏳ Chưa thực hiện |
| **Task 6**  | API tạo đơn hàng `POST /orders`       | ⏳ Chưa thực hiện |
| **Task 7**  | Xác thực người dùng qua JWT (Auth)    | ⏳ Chưa thực hiện |
| **Task 8**  | Tích hợp Mock Payment                 | ⏳ Chưa thực hiện |
| **Task 9**  | Màn hình Confirmation & Order History | ⏳ Chưa thực hiện |
| **Task 10** | Tối ưu hóa backend & bảo mật nâng cao | ⏳ Chưa thực hiện |

---

## 15. Công nghệ sử dụng

- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS
- **Backend:** NestJS, TypeScript, RESTful API, JWT
- **Database & ORM:** PostgreSQL, Prisma / TypeORM
- **Tools:** Visual Studio Code, Git, GitHub, npm

---

## 16. Git Workflow & Quy tắc Commit

### Workflow cơ bản

```bash
git status
git add .
git commit -m "loại(phạm-vi): nội dung mô tả"
git push
```

### Quy ước Commit (Conventional Commits)

- `feat:` Bổ sung tính năng mới (ví dụ: `feat: add product API`)
- `fix:` Sửa lỗi (ví dụ: `fix: fix product price calculation`)
- `docs:` Cập nhật tài liệu (ví dụ: `docs: update README`)
- `chore:` Cấu hình linh tinh, package, build (ví dụ: `chore: initialize project`)

---

## 17. Development Roadmap

```text
Task 1: Project Initialization
       ↓
Task 2: Products API
       ↓
Task 3: Menu Frontend
       ↓
Task 4: Product Detail
       ↓
Task 5: Shopping Cart
       ↓
Task 6: Order API
       ↓
Task 7: Authentication
       ↓
Task 8: Payment
       ↓
Task 9: Confirmation / History
       ↓
Task 10: Backend Advanced Features
```

---

## 18. Mục tiêu MVP & Hướng mở rộng

### Mục tiêu MVP

Hoàn thiện toàn bộ luồng người dùng: **Xem Menu → Chi tiết & Custom → Giỏ hàng → Đăng nhập → Thanh toán → Nhận mã xác nhận**.

### Hướng phát triển tiếp theo

- Quản lý trạng thái đơn hàng theo thời gian thực (WebSockets).
- Đảm bảo Idempotency trong thanh toán trực tuyến.
- Quản lý tồn kho đồng thời (Concurrency control).
- Hệ thống mã giảm giá & tích điểm thành viên (Loyalty program).
- Phân quyền Quản trị viên (Admin Dashboard: quản lý món, doanh thu, thống kê).

---

## 19. Bản quyền & Thông tin môn học

Đồ án được thực hiện phục vụ mục đích học tập trong môn **Công nghệ Phần mềm – Đại học Sài Gòn**.

- **Project:** BrewLite – Cashless Coffee Ordering System
- **Frontend:** Next.js (`http://localhost:3000`)
- **Backend:** NestJS (`http://localhost:3001`)
