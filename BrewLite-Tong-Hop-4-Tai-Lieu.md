# 🍵 BrewLite — Tài liệu tổng hợp

> **Tài liệu này được gom nguyên nội dung từ 4 file nguồn thành một file Markdown duy nhất.**
>
> **Nguồn 1:** `BrewLite-CongNghePhanMem(2).pdf`  
> **Nguồn 2:** `Quy ước chung.docx`  
> **Nguồn 3:** `Quy ước tên biến.md`  
> **Nguồn 4:** `Tài liệu đặc tả .docx`

---

# PHẦN I — BÀI TẬP LỚN CÔNG NGHỆ PHẦN MỀM

**Nguồn:** `BrewLite-CongNghePhanMem(2).pdf`

---

TRƯỜNG ĐẠI HỌC SÀI GÒN
KHOA CÔNG NGHỆ THÔNG TIN
SOFTWARE ENGINEERING
Bài tập lớn:
BrewLite
VER 1.0
Môn học: Công nghệ Phần mềm
Học kỳ: I – Năm học 2026–2027
TP. HỒ CHÍ MINH, NĂM 2026

Mục lục
1 Tóm tắt 2
2 Tổng quan quy trình Agile Scrum 2
2.1 Vai trò, Sự kiện, Tạo phẩm . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
2.2 Vòng lặp Scrum . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
2.3 Kế hoạch 3 Sprint cho BrewLite (gợi ý) . . . . . . . . . . . . . . . . . . . . . . . . 2
2.4 Sprint Burndown chart (biểu đồ mẫu) . . . . . . . . . . . . . . . . . . . . . . . . . 2
3 Sản phẩm và người dùng 3
3.1 Product Vision . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
3.2 Các bên liên quan (Stakeholders) . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
4 Yêu cầu phần mềm (Requirements) 3
4.1 Yêu cầu chức năng (Functional) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
4.2 Yêu cầu phi chức năng (Non-functional) . . . . . . . . . . . . . . . . . . . . . . . . 3
4.3 User Story tiêu biểu (mẫu để viết) . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
5 Luồng nghiệp vụ: từ chọn sản phẩm đến thanh toán 4
6 Kiến trúc và công nghệ 4
7 Giao diện MVP tham khảo (wireframe) 5
8 Product Backlog: 10 task theo Scrum 5
9 Task 10 – nghiệp vụ backend 6
9.1 Sơ đồ máy trạng thái đơn hàng (Order State Machine) . . . . . . . . . . . . . . . . 6
10 Definition of Done 7
11 Bàn giao sản phẩm cho khách hàng 7
12 API và chức năng tối thiểu 7
12.1 Một số endpoint chính . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
12.2 Thực thể tối thiểu . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
1

1 Tóm tắt
Tóm tắt nội dung
Đây là bài tập lớn cho nhóm sinh viên mônCông nghệ Phần mềm. Nhóm sẽ xây dựngBrewLite
– một ứng dụngđặt cà phê không dùng tiền mặt– theoquy trình Agile Scrumđầy đủ, từ
thu thập yêu cầu(requirements), kịch bản (scenario), phát triển (development) cho đếnbàn
giao sản phẩm cho khách hàng. Sản phẩm tối thiểu (MVP) trải dài từ lúc kháchchọn sản
phẩm đến lúcthanh toán. Đề bài gồm10 task(mỗi task1 điểm, tổng10 điểm) theo Scrum.
Công nghệ bắt buộc:NestJS (Backend) +Next.js (Frontend).
2 Tổng quan quy trình Agile Scrum
2.1 Vai trò, Sự kiện, Tạo phẩm
Nhóm yếu tố Thành phần
Vai trò (Roles) Product Owner (PO), Scrum Master (SM), Development
Team.
Sự kiện (Events) Sprint Planning, Daily Scrum, Sprint Review, Sprint
Retrospective.
Tạo phẩm (Artifacts) Product Backlog, Sprint Backlog, Increment (sản phẩm tăng
dần).
2.2 Vòng lặp Scrum
Product
Backlog
Sprint
Planning
Sprint
Backlog
Sprint
(1–2 tuần)
Daily Scrum
(15 phút/ngày)
Increment
(bản chạy được)
Sprint
Review
Sprint
Retrospective
2.3 Kế hoạch 3 Sprint cho BrewLite (gợi ý)
Sprint Mục tiêu (Sprint
Goal)
Task
Sprint 1 Nền tảng & hiển thị
menu
Task 1, 2, 3, 4
Sprint 2 Giỏ hàng & đặt đơn &
đăng nhập
Task 5, 6, 7
Sprint 3 Thanh toán, bàn giao &
nghiệp vụ nâng cao
Task 8, 9, 10
2.4 Sprint Burndown chart (biểu đồ mẫu)
Burndown charttheo dõikhối lượng công việc còn lại(story points) giảm dần theo từng ngày
trong một Sprint. Đườnglý tưởng(Ideal) là mục tiêu giảm đều; đườngthực tế (Actual) phản ánh
tiến độ thật của nhóm. Ví dụ dưới đây cho một Sprint 2 tuần (10 ngày làm việc, tổng 20 điểm).
2

0
5
10
15
20
0 1 2 3 4 5 6 7 8 9 10
Ngày làm việc
Story points còn lại
Lý tưởng (Ideal)
Thực tế (Actual)
Cách đọc:nếu đường thực tế nằm trên đường lý tưởng ⇒ nhóm đang chậm tiến độ; nằm
dưới ⇒ vượt tiến độ. Daily Scrum dùng biểu đồ này để phát hiện rủi ro sớm và điều chỉnh
phạm vi Sprint. Mỗi nhóm cập nhật số điểm còn lạicuối mỗi ngày.
3 Sản phẩm và người dùng
3.1 Product Vision
“BrewLite giúp khách hàng đặt và thanh toán đồ uốngkhông dùng tiền mặtchỉ trong vài
chạm, giảm thời gian xếp hàng và nhận đơn nhanh tại quầy.”
3.2 Các bên liên quan (Stakeholders)
• Khách hàng:đặt đồ uống, chọn size/topping, thanh toán không tiền mặt và theo dõi trạng
thái đơn.
• Nhân viên quầy/Barista:tiếp nhận đơn và cập nhật trạng thái pha chế. Chức năng này
nằm ngoài phạm vi MVP và là phần mở rộng.
• Quản lý cửa hàng/Product Owner:xác định yêu cầu, ưu tiên Product Backlog và nghiệm
thu Increment sau mỗi Sprint.
• Giảng viên nghiệm thu:đánh giá quy trình, sản phẩm và mức độ đáp ứng các tiêu chí chấp
nhận.
• Nhóm phát triển:phân tích, thiết kế, lập trình, kiểm thử và bàn giao hệ thống.
• Đơn vị thanh toán:cung cấp hoặc được mô phỏng qua cổng thanh toán Ví/Thẻ trong phạm
vi bài tập lớn.
4 Yêu cầu phần mềm (Requirements)
4.1 Yêu cầu chức năng (Functional)
1. Hiển thị danh sách (menu) đồ uống kèm hình, tên, giá.
2. Xem chi tiết sản phẩm, chọnsize và topping.
3. Thêm/sửa/xóa sản phẩm tronggiỏ hàng; tự tính tổng tiền.
4. Đăng ký / đăng nhập tài khoản (JWT).
5. Tạo đơn hàng vàthanh toán không tiền mặt.
6. Hiển thị xác nhận đơn (mã đơn, trạng thái) và lịch sử đơn.
4.2 Yêu cầu phi chức năng (Non-functional)
• Thời gian phản hồi API< 500ms với dữ liệu mẫu.
3

• Bảo mật: mật khẩu băm (hash), token JWT, validate dữ liệu đầu vào.
• Phù hợp trên các trình duyệt web.
4.3 User Story tiêu biểu (mẫu để viết)
US-05 – Thanh toán không tiền mặt
Là một khách hàng,tôi muốn thanh toán đơn bằng ví điện tử/thẻ,để tôi không cần mang
tiền mặt.
Tiêu chí chấp nhận (Acceptance Criteria):
• Khi giỏ hàng có ít nhất 1 sản phẩm, nút “Thanh toán” hiển thị tổng tiền.
• Chọn phương thức (Ví / Thẻ) rồi xác nhận⇒ tạo đơn ở trạng tháiPAID.
• Nếu thanh toán lỗi, đơn ở trạng tháiPAYMENT_FAILED và giỏ hàng được giữ nguyên.
• Sau khi thành công, hiển thị mã đơn và màn hình xác nhận.
5 Luồng nghiệp vụ: từ chọn sản phẩm đến thanh toán
Luồng nghiệp vụ chính (happy path) của MVP:
Mở app
Xem menu
Chọn sản phẩm
(size, topping)
Thêm vào giỏ hàng
Xem giỏ & tổng tiền
Đăng nhập
(nếu chưa)
Thanh toán
không tiền mặt
Xác nhận đơn
(mã đơn)
Nhận đồ uống
Thêm sản phẩm khác
mua thêm
Hủy /
thanh toán lỗi
lỗi
6 Kiến trúc và công nghệ
FrontendNext.jsgọi REST API của backendNestJS; NestJS dùng một CSDL (gợi ý PostgreSQL
qua Prisma/TypeORM) và tích hợp cổng thanh toán giả lập (mock payment gateway).
4

Next.js
(Frontend SSR/CSR)
NestJS
(REST API) PostgreSQL
Payment Gateway
(mock)
REST/JSON ORM
thanh toán
Thành phần Công nghệ
Frontend Next.js (React, TypeScript), TailwindCSS, React
Query/Zustand (giỏ hàng)
Backend NestJS (TypeScript), REST, class-validator, JWT (Passport)
CSDL PostgreSQL + Prisma (hoặc TypeORM)
Thanh toán Mock Payment Service (mô phỏng Momo/VNPay/Stripe)
DevOps Docker Compose, Git, README bàn giao
7 Giao diện MVP tham khảo (wireframe)
Năm màn hình cốt lõi từchọn sản phẩmđến xác nhận thanh toán. Sinh viên có thể bám theo bố
cục này khi dựng UI bằng Next.js.
BrewLite ≡
Cà phê sữa 35k
Americano 40k
Cappuccino 45k
Trà đào 39k
Xem giỏ hàng (0)
(1) Menu
← Cappuccino
Giá: 45.000đ
Size
S M L
Topping
Trân châu / Kem
Thêm vào giỏ
(2) Chi tiết
Giỏ hàng
Cappuccino M x1
Trà đào L x2
– - - - - - - - -
Tổng: 123.000đ
Thanh toán
(3) Giỏ hàng
Thanh toán
Tổng: 123.000đ
Phương thức
(o) Ví điện tử
( ) Thẻ ngân hàng
Không dùng tiền mặt
Xác nhận trả
(4) Thanh toán
✓
Đặt hàng thành công
Mã đơn: #1042
Trạng thái: PAID
Mời tới quầy lấy nước
Về trang chủ
(5) Xác nhận
8 Product Backlog: 10 task theo Scrum
Mỗi task là một hạng mục backlog, sắp xếptừ dễ đến khóvà phân vào các Sprint. Mỗi task
hoàn thành (đạt Definition of Done ở Mục 10) được1 điểm, tổng10 điểm.
# Task (Story) Yêu cầu / Tiêu chí chấp nhận chính Điểm
1 Khởi tạo dự án và cấu
trúc
Tạo monorepo/2 thư mục frontend (Next.js) +
backend (NestJS), chạy được “Hello”, có README,
Git, .env.example.
1
2 API danh sách sản
phẩm
NestJS GET /products trả về JSON menu (id, tên,
giá, ảnh) từ dữ liệu mẫu/CSDL.
1
3 Trang Menu (Frontend) Next.js gọi /products, render lưới sản phẩm, có
loading/empty state.
1
5

# Task (Story) Yêu cầu / Tiêu chí chấp nhận chính Điểm
4 Chi tiết và tùy chọn sản
phẩm
Màn hình chi tiết: chọn size (S/M/L) và topping;
tính giá theo tùy chọn.
1
5 Giỏ hàng (Cart) Thêm/sửa số lượng/xóa; lưu state
(Zustand/Context); tự tính tổng tiền; badge
số lượng.
1
6 API tạo đơn hàng NestJS POST /orders nhận giỏ hàng, validate
(class-validator), lưu đơn trạng thái PENDING, trả
mã đơn.
1
7 Đăng ký / Đăng nhập
(JWT)
POST /auth/register, /auth/login; băm mật
khẩu (bcrypt); phát JWT; guard bảo vệ route đặt
đơn.
1
8 Thanh toán không tiền
mặt
Tích hợp mock payment: chọn Ví/Thẻ, gọi POST
/payments; đơn chuyển PAID khi thành công,
PAYMENT_FAILED khi lỗi.
1
9 Xác nhận, lịch sử đơn &
bàn giao
Màn hình xác nhận (mã đơn, trạng thái) vàGET
/orders/me (lịch sử đơn);docker-compose chạy cả
3 (frontend, backend, DB); README; demo end-
to-end.
1
10 Nghiệp vụ backend State Machine đơn hàng, thanh toán idempotent,
kiểm soát tồn kho khi đặt đồng thời, khuyến
mãi/điểm thưởng (chi tiết ở Mục 9).
1
Tổng 10
9 Task 10 – nghiệp vụ backend
Task 10: Xử lý đặt hàng và thanh toán.
Hiện thựcnghiệp vụ backend thực tếtrong NestJS bao gồmcả 4yêu cầu:
1. Order State Machine:PENDING → PAID → PREPARING → READY → COMPLETED; chặn
chuyển trạng thái không hợp lệ.
2. Thanh toán idempotent:dùng Idempotency-Key để cùng một yêu cầu thanh toán lặp
lại không bị trừ tiền/đặt đơn 2 lần.
3. Kiểm soát tồn kho khi đặt đồng thời:khi nhiều khách đặt cùng lúc, dùngtransaction
+ optimistic lockingđể không bán quá số lượng nguyên liệu/sản phẩm còn lại.
4. Khuyến mãi và điểm thưởng (loyalty):áp mã giảm giá hợp lệ và cộng điểm tích lũy
cho khách sau khi đơnPAID.
Tiêu chí chấm:có unit/integration test chứng minh: (a) chặn được chuyển trạng thái sai;
(b) gửi 2 lần cùng Idempotency-Key chỉ tạo 1 đơn; (c) đặt đồng thời không vượt tồn kho.
9.1 Sơ đồ máy trạng thái đơn hàng (Order State Machine)
Sơ đồ dưới đây mô tả các trạng thái hợp lệ của một đơn hàng và các chuyển tiếp được phép.
Mọi chuyển tiếp không có mũi tênsẽ bị hàmassertTransition chặn lại (ném lỗi).COMPLETED và
CANCELLED là trạng tháikết thúc.
6

start PENDING PAID PREPARING READY COMPLETED
PAYMENT_FAILED CANCELLED
thanh toán OK barista nhận pha xong giao khách
thanh toán lỗithử lại hủyhủy
hủy
Mô tả: đi theo luồng xanh (đường ngang) là trạng thái thành công: PENDING → PAID
→ PREPARING → READY → COMPLETED. Các nhánh đỏ/xám là ngoại lệ: thanh toán lỗi
(PAYMENT_FAILED, có thểthử lại) hoặchủy đơn (CANCELLED).
10 Definition of Done
Một task được tính điểm khi thỏaDefinition of Done (DoD):
• Code chạy được, không lỗi build; tuân theo tiêu chí chấp nhận của task.
• Có commit trên Git với mô tả rõ ràng; được review trong nhóm.
• API có validate đầu vào; UI xử lý trạng thái loading/lỗi cơ bản.
• Có hướng dẫn chạy trong README.
11 Bàn giao sản phẩm cho khách hàng
Ở cuối Sprint cuối, nhóm tổ chức buổiSprint Review / Demođóng vai bàn giao cho giảng viên:
1. Trình diễn luồng end-to-end: chọn sản phẩm→ giỏ hàng→ thanh toán→ xác nhận đơn.
2. Bàn giao mã nguồn (Git),docker-compose chạy được, README.
3. Trình bàySprint Retrospective: điều làm tốt, điều cần cải thiện.
4. Nhận phản hồi của “khách hàng” và ghi nhận backlog cho phiên bản sau.
12 API và chức năng tối thiểu
12.1 Một số endpoint chính
Endpoint Chức năng
GET /products Danh sách sản phẩm (menu)
GET /products/:id Chi tiết một sản phẩm
POST /auth/register Đăng ký tài khoản
POST /auth/login Đăng nhập, trả JWT
POST /orders Tạo đơn (PENDING)
POST /payments Thanh toán (idempotent)
GET /orders/me Lịch sử đơn của user
12.2 Thực thể tối thiểu
• Product(id, name, price, imageUrl, stock).
• User(id, email, passwordHash, loyaltyPoints).
• Order(id, userId, status, total, createdAt).
• OrderItem(id, orderId, productId, size, qty, lineTotal).
• Payment(id, orderId, idempotencyKey, amount, method).
7

---

# PHẦN II — QUY ƯỚC CHUNG CỦA PROJECT

**Nguồn:** `Quy ước chung.docx`

---

🍵 BREWLITE - PROJECT GUIDELINES
Project: BrewLite - Premium Beverage Delivery App
Thời gian: 3 Sprints (S1, S2, S3)
Team Lead: A1: Nguyễn Gia Thành (Backend), B1: Vũ Châu Minh Khôi (Frontend)
Last Updated: 26/09/2026
🎯 PUSH RULE (CRITICAL!)
⚠️ CHỈ A1 VÀ B1 ĐƯỢC PUSH LÊN!
A1 (Backend Lead): Push backend code lên git
B1 (Frontend Lead): Push frontend code lên git
Người khác:
Commit vào feature branch
Tạo PR
A1/B1 review → merge
📅 MEETING SCHEDULE
Weekly Meeting: 1 lần/tuần
Thời gian: TBD (Thứ 5 hoặc Thứ 6)
Nội dung: Standup + Sprint review + Issues
📋 TASK BREAKDOWN (Files & Folders)
SPRINT 1
Task 1: Khởi tạo Monorepo
Folder structure:
brewlite/
├── backend/
│   ├── src/
│   │   ├── main.ts
│   │   └── app.controller.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   └── page.tsx
│   │   └── components/
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   └── README.md
├── .gitignore
└── README.md (root)
Assigned to: ALL (A1+B1 lead)
Files to create: 10 files
Git: Commit to develop
Status: ✅ DONE (hopefully!)
Task 2: API GET /products
Backend files:
backend/src/
├── products/
│   ├── products.controller.ts
│   ├── products.service.ts
│   ├── product.entity.ts
│   └── products.module.ts
└── main.ts (update module)
Assigned to: A1 (Lead)
Files to create: 4 files
Endpoint: GET /api/v1/products
Response:
{
  "statusCode": 200,
  "message": "Products fetched",
  "data": [
    {
      "id": "uuid",
      "name": "Cà phê đen",
      "price": 25000,
      "imageUrl": "...",
      "description": "Cà phê đen đậm đà"
    }
  ]
}
Git: feature/task-2-products-api → PR → A1 merge to develop
Task 3: Menu Page (Frontend)
Frontend files:
frontend/src/
├── app/
│   └── menu/
│       └── page.tsx (Menu page component)
├── components/
│   └── ProductCard.tsx (Reusable card)
└── stores/
    └── productStore.ts (Zustand)
Assigned to: B1 (Lead)
Files to create: 3 files
Features:
Display products from Task 2 API
Product card with image, name, price
Click → Product detail (Task 4)
Git: feature/task-3-menu-page → PR → B1 merge to develop
Task 4: Product Detail Page
Frontend files:
frontend/src/
├── app/
│   └── product/
│       └── [id]/
│           └── page.tsx (Detail page)
├── components/
│   ├── SizeSelector.tsx (S/M/L)
│   ├── ToppingSelector.tsx (Checkboxes)
│   └── QuantitySelector.tsx (Counter)
└── utils/
    └── priceCalculator.ts (Calculate total)
Assigned to: B1 (Lead)
Files to create: 5 files
Features:
Display product details
Size selector (S/M/L, different prices)
Topping selector (checkboxes, add price)
Quantity selector (1-20)
Real-time price calculation
"Add to cart" button
Git: feature/task-4-product-detail → PR → B1 merge to develop
SPRINT 2
Task 5: Cart & State Management
Frontend files:
frontend/src/
├── app/
│   └── cart/
│       └── page.tsx (Cart page)
├── components/
│   └── CartItem.tsx (Cart item component)
├── stores/
│   └── cartStore.ts (Zustand - manage cart state)
└── hooks/
    └── useCart.ts (Custom hook)
Assigned to: B1 (Lead)
Files to create: 4 files
Features:
Display cart items
Edit item (qty, size, topping)
Remove item
Calculate total
Persist in localStorage
"Checkout" button → Task 6
Git: feature/task-5-cart → PR → B1 merge to develop
Task 6: API POST /orders
Backend files:
backend/src/
├── orders/
│   ├── orders.controller.ts
│   ├── orders.service.ts
│   ├── order.entity.ts
│   ├── order-item.entity.ts
│   ├── create-order.dto.ts
│   ├── order-state-machine.ts
│   └── orders.module.ts
└── main.ts (update module)
Assigned to: A1 (Lead)
Files to create: 7 files
Endpoint: POST /api/v1/orders
Request:
{
  "items": [
    {
      "productId": "uuid",
      "quantity": 2,
      "size": "M",
      "toppings": ["topping1", "topping2"],
      "priceAtAdded": 50000
    }
  ],
  "totalPrice": 100000
}
Response:
{
  "statusCode": 201,
  "message": "Order created",
  "data": {
    "id": "order-uuid",
    "status": "PENDING",
    "totalPrice": 100000,
    "items": [...]
  }
}
Features:
Validate cart items
Create order
Create order items
State machine: PENDING → PAID → PREPARING → READY → COMPLETED
Calculate totals
Git: feature/task-6-orders-api → PR → A1 merge to develop
Task 7: Auth (Register/Login)
Backend files:
backend/src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── dto/
│   │   ├── register.dto.ts
│   │   ├── login.dto.ts
│   │   └── auth-response.dto.ts
│   ├── entities/
│   │   └── user.entity.ts
│   ├── guards/
│   │   └── jwt.guard.ts
│   ├── strategies/
│   │   └── jwt.strategy.ts
│   └── decorators/
│       └── current-user.decorator.ts
├── prisma/
│   └── schema.prisma (ADD User model)
└── main.ts (update module)
Frontend files:
frontend/src/
├── app/
│   └── auth/
│       ├── login/
│       │   └── page.tsx
│       └── register/
│           └── page.tsx
├── api/
│   └── auth.ts (API calls)
├── stores/
│   └── authStore.ts (Zustand - user state)
└── hooks/
    └── useAuth.ts (Custom hook)
Assigned to: A1 (Backend Lead) + B1 (Frontend Lead)
Files to create: 15 files
Backend Endpoints:
POST /api/v1/auth/register → Create user
POST /api/v1/auth/login → Verify + return JWT token
GET /api/v1/auth/me (protected) → Get current user
Frontend:
Login page (email + password + forgot password link)
Register page (email + password + confirm password)
Auth store (save token + user info)
useAuth hook
Git:
Backend: feature/task-7-auth-backend → PR → A1 merge
Frontend: feature/task-7-auth-frontend → PR → B1 merge
SPRINT 3 (Later)
Task 8: Payment
Backend files:
backend/src/
├── payment/
│   ├── payment.controller.ts
│   ├── payment.service.ts
│   ├── mock-payment.service.ts
│   └── payment.module.ts
Task 9: Confirmation & Order History
Frontend files:
frontend/src/
├── app/
│   ├── confirmation/
│   │   └── page.tsx
│   └── order-status/
│       └── page.tsx
Task 10: Business Logic & Deployment
Docker files:
├── docker-compose.yml
├── Dockerfile (backend)
├── Dockerfile (frontend)
Code features:
- Idempotency (duplicate order prevention)
- Inventory management
- Loyalty points
- Promotion codes
🎨 DESIGN SPECIFICATIONS
Color Palette (From BrewLite Brand)
Primary Colors:
- Dark Brown (Chính): #3E2723 (Buttons, headers)
- Coffee Brown: #6D4C41 (Secondary)
- Cream/Beige: #F5F1E8 (Background)
- Warm Gold: #D7C9B8 (Accents)
Text Colors:
- Dark Text: #1A1A1A (Headings, body)
- Muted Text: #666666 (Descriptions)
- Light Text: #FFFFFF (On dark backgrounds)
Alerts:
- Success: #4CAF50 (Green)
- Error: #F44336 (Red)
- Warning: #FF9800 (Orange)
- Info: #2196F3 (Blue)
Typography
Font: Segoe UI, -apple-system, BlinkMacSystemFont, or system font
Sizes:
- Heading 1 (H1): 32px, bold (Page titles)
- Heading 2 (H2): 24px, bold (Section titles)
- Body (P): 16px, regular (Normal text)
- Small (Span): 14px, regular (Descriptions)
- Label: 14px, medium (Form labels)
- Button: 16px, bold (Button text)
Form Standards (Based on teacher's requirements)
Input Fields:
- Border: 1px solid #CCCCCC
- Border-radius: 8px
- Padding: 12px 16px
- Font-size: 16px
- Focus: Border color → #3E2723, box-shadow: 0 0 4px rgba(62,39,35,0.3)
Buttons:
- Background: #3E2723 (Dark brown)
- Color: #FFFFFF
- Border-radius: 8px (or full rounded)
- Padding: 12px 32px
- Font-size: 16px, bold
- Hover: Background → #6D4C41 (Coffee brown)
- Disabled: Opacity 0.5
Checkboxes/Radio:
- Accent color: #3E2723
- Size: 20px × 20px
- Margin: 8px
Error Messages:
- Color: #F44336 (Red)
- Font-size: 14px
- Margin-top: 4px
Page Layouts
1. Login Page (frontend/src/app/auth/login/page.tsx)
Layout:
[Left] Background image (coffee shop photo)
[Right] Form
  - Logo/Title: "BrewLite"
  - Tagline: "Đăng nhập để đặt cà phê và các trà yêu thích."
  - Email input: "Địa chỉ Email" → "xincho@example.com"
  - Password input: "Mật khẩu" → password dots
  - Forgot password link: "Quên mật khẩu?" (right side)
  - Login button: "Đăng Nhập" (full width, dark brown)
  - Signup link: "Bạn chưa có tài khoản? Tạo tài khoản mới" (center bottom)
Colors:
- Background: #F5F1E8 (Cream)
- Input: White with #CCCCCC border
- Button: #3E2723 (Dark brown)
- Text: #1A1A1A
- Link: #3E2723 (underline on hover)
2. Register Page (frontend/src/app/auth/register/page.tsx)
Layout:
Same as login, but:
  - Email input: "Địa chỉ Email"
  - Password input: "Mật khẩu"
  - Confirm password: "Nhập lại mật khẩu"
  - Password strength indicator (optional)
  - Register button: "Tạo Tài Khoản"
  - Login link: "Bạn đã có tài khoản? Đăng nhập" (center bottom)
3. Menu Page (frontend/src/app/menu/page.tsx)
Layout:
- Header: Logo + Search (optional) + Cart icon + User menu
- Grid of products (3 columns on desktop, 2 on tablet, 1 on mobile)
- Each ProductCard:
  - Product image (16:9 ratio)
  - Product name
  - Description (2 lines max)
  - Price: "25.000 đ"
  - Add to cart button
Colors:
- Card background: White
- Card border: 1px solid #E0E0E0
- Hover: box-shadow: 0 4px 12px rgba(0,0,0,0.1)
4. Product Detail Page (frontend/src/app/product/[id]/page.tsx)
Layout:
- Left: Product image (large)
- Right:
  - Product name (H1)
  - Description
  - Base price
  - Size selector: S / M / L (radio buttons)
    - S: 25.000đ
    - M: 30.000đ
    - L: 35.000đ
  - Topping selector: Checkboxes (multi-select)
    - Trân châu: +2.000đ
    - Kem: +1.000đ
    - Nước cốt dừa: +2.000đ
  - Quantity: - + (buttons)
  - Total price: "Tổng cộng: 35.000đ"
  - Add to cart button: "Thêm vào giỏ"
  - Real-time price update
5. Cart Page (frontend/src/app/cart/page.tsx)
Layout:
- Left: Cart items
  - Each CartItem:
    - Product image
    - Product name
    - Size, toppings
    - Quantity selector (- +)
    - Price
    - Delete button (X)
- Right: Cart summary
  - Subtotal
  - Shipping (if applicable)
  - Total
  - Continue shopping button
  - Checkout button: "Thanh toán" → Task 7 (Login if needed)
🔄 GIT WORKFLOW
Branch Naming
main               ← Production (release only)
develop            ← Integration (daily work)
feature/task-N-XXX ← Feature branches
Commit Message Format
[Task-N] Description
Examples:
[Task-2] API: Implement GET /products endpoint
[Task-3] UI: Create ProductCard component
[Task-7] Auth: Add JWT strategy and register endpoint
Push Process (ONLY A1 & B1!)
Developer (A2/B2/B3):
  1. Create branch: feature/task-N-xxx
  2. Commit code
  3. Push to origin
  4. Create PR on GitHub
  5. Wait for A1/B1 review
Lead (A1 for backend, B1 for frontend):
  1. Review PR
  2. Request changes if needed
  3. Approve PR
  4. MERGE to develop (only lead can do this!)
  5. Verify build/test pass
Example Workflow
# Developer
git checkout -b feature/task-2-products-api
git add .
git commit -m "[Task-2] API: Implement GET /products endpoint"
git push origin feature/task-2-products-api
# → Create PR on GitHub
# Lead (A1)
git checkout develop
git pull origin develop
git merge feature/task-2-products-api
git push origin develop  # ← ONLY LEAD DOES THIS!
git branch -d feature/task-2-products-api
✅ TASK CHECKLIST (Definition of Done)
Each task is DONE when:
All files created (matching folder structure)
Code follows naming conventions
No sensitive data in code (.env values hidden)
API endpoints tested (curl or Postman)
Frontend pages tested (browser)
PR created with description
Code reviewed & approved by lead
No merge conflicts
Merged to develop
README updated (if needed)
📞 CONTACT
🎯 KEY RULES
✅ Only A1 pushes backend, only B1 pushes frontend
✅ Others create PR, lead merges
✅ Weekly meeting every week (standup + review)
✅ Follow naming conventions (variables, files, functions)
✅ No hardcoded secrets (.env only)
✅ No plain passwords (hash with bcrypt)
✅ Response format: { statusCode, message, data }
✅ Test before PR (locally)
✅ Commit message format: [Task-N] Description
✅ Ask if unsure (don't assume)
📊 SPRINT TIMELINE
Let's build BrewLite! 🍵✨
Questions? Ask A1 or B1!
Role | Name | Responsibility
Backend Lead | A1 | Push backend, review PR, architecture
Frontend Lead | B1 | Push frontend, review PR, design
Weekly Lead | A1/B1 | Run weekly meeting
Sprint | Week | Tasks | Deadline
S1 | W1-2 | 1, 2, 3, 4 | Week 2 Friday
S2 | W2-3 | 5, 6, 7 | Week 3 Friday
S3 | W3-4 | 8, 9, 10 | Week 4 Friday

---

# PHẦN III — QUY ƯỚC ĐẶT TÊN BIẾN, HÀM, CLASS, FILE...

**Nguồn:** `Quy ước tên biến.md`

---

# 📝 NAMING CONVENTIONS - BrewLite

**Mục đích:** Đảm bảo toàn bộ nhóm đặt tên biến, hàm, constants, types... theo cùng một chuẩn

**Áp dụng cho:** Tất cả 6 người (Backend: A1, A2, A3 | Frontend: B1, B2, B3)

---

## 🎯 QUICK REFERENCE

| Loại | Format | Ví dụ | Dùng khi |
|------|--------|-------|---------|
| **Variables** | camelCase | `userName`, `totalPrice` | Lưu giá trị |
| **Constants** | UPPER_SNAKE_CASE | `JWT_SECRET`, `MAX_ITEMS` | Giá trị không đổi |
| **Functions** | camelCase | `calculatePrice()`, `handleSubmit()` | Function/method |
| **Classes** | PascalCase | `ProductCard`, `AuthService` | Class/Component |
| **Interfaces** | PascalCase + I prefix (optional) | `IUser`, `ProductDto` | Type definition |
| **Files** | kebab-case or camelCase | `user.entity.ts`, `productCard.tsx` | File names |
| **API routes** | kebab-case | `/api/v1/products`, `/auth/register` | API endpoints |
| **Database** | snake_case | `user_id`, `created_at` | DB columns |
| **CSS classes** | kebab-case | `.product-card`, `.btn-primary` | Tailwind/CSS |

---

# 🔷 BACKEND (TypeScript + NestJS)

## 1. VARIABLES

### Local Variables - camelCase

```typescript
// ✅ ĐÚNG
const userName = 'john_doe';
let userCount = 0;
const isActive = true;
const totalPrice = 150000;
const emailList = ['a@test.com', 'b@test.com'];

// ❌ SAI
const user_name = 'john_doe';       // snake_case
const UserName = 'john_doe';        // PascalCase
const username = 'john_doe';        // Không rõ (ok nhưng không consistent)
const USER_NAME = 'john_doe';       // UPPER_CASE (dành cho constants)
```

### Object Properties - camelCase

```typescript
// ✅ ĐÚNG
const user = {
  userId: 'uuid-123',
  firstName: 'John',
  lastName: 'Doe',
  emailAddress: 'john@example.com',
  isEmailVerified: true,
  createdAt: new Date(),
};

// ❌ SAI
const user = {
  user_id: 'uuid-123',              // snake_case
  first_name: 'John',               // snake_case
  FirstName: 'John',                // PascalCase
};
```

### Loop Variables - camelCase (dùng tên meaningful)

```typescript
// ✅ ĐÚNG
for (const user of users) {
  console.log(user.name);
}

for (const [index, item] of items.entries()) {
  console.log(index, item);
}

// ❌ SAI
for (const u of users) {}            // Quá viết tắt
for (const i = 0; i < items.length; i++) {} // Dùng index khi có forEach
```

---

## 2. FUNCTIONS/METHODS

### Regular Functions - camelCase, Động từ ở đầu

```typescript
// ✅ ĐÚNG - Action verbs
function calculatePrice(basePrice: number, tax: number): number {
  return basePrice + tax;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getUserById(id: string): Promise<User> {
  return this.prisma.user.findUnique({ where: { id } });
}

function createOrder(dto: CreateOrderDto): Promise<Order> {
  return this.prisma.order.create({ data: dto });
}

// ❌ SAI - Không có động từ
function user() {}              // Không rõ mục đích
function email() {}             // Quá chung chung
function data() {}              // Không có ý nghĩa

// ❌ SAI - Tên quá dài/quá viết tắt
function calc() {}              // Quá viết tắt
function validateEmailAddressAndCheckIfItExistsInDatabase() {} // Quá dài
```

### Common Verb Prefixes

```typescript
// GET / FETCH
getUser()
getUserById()
fetchProducts()
retrieveOrderStatus()

// CREATE
createUser()
createOrder()
generateToken()
buildResponse()

// UPDATE
updateUserEmail()
modifyOrderStatus()
setUserPreference()

// DELETE
deleteUser()
removeItem()
clearCache()

// CHECK / VALIDATE
isEmailValid()
isUserActive()
hasPermission()
validateInput()
checkStock()

// HANDLE (for event handlers)
handleSubmit()
handleClick()
handleError()
onSuccess()
onFailure()

// CONVERT / PARSE
parseJson()
formatDate()
convertToDTO()
mapToEntity()
```

### Method Chaining - Lowercase

```typescript
// ✅ ĐÚNG
const orders = await this.prisma.order
  .findMany({
    where: { userId: id },
    include: { items: true },
    orderBy: { createdAt: 'desc' },
  });

// ❌ SAI
const orders = await this.prisma.order
  .FindMany()  // PascalCase
  .Include()   // PascalCase
```

---

## 3. CLASSES & SERVICES

### Class Names - PascalCase

```typescript
// ✅ ĐÚNG
class UserService {
  async createUser(dto: CreateUserDto) {}
  async getUser(id: string) {}
  async updateUser(id: string, dto: UpdateUserDto) {}
}

class OrderController {
  @Post()
  async createOrder(@Body() dto: CreateOrderDto) {}
}

class JwtGuard implements CanActivate {
  canActivate(context: ExecutionContext) {}
}

// ❌ SAI
class user_service {}              // snake_case
class userService {}               // camelCase
class USERSERVICE {}               // UPPER_CASE
```

---

## 4. CONSTANTS

### UPPER_SNAKE_CASE (tất cả in hoa, underscore)

```typescript
// ✅ ĐÚNG - Toàn cục constants
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_EXPIRY = '24h';
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_SALT_ROUNDS = 10;
const MAX_ITEMS_PER_ORDER = 20;
const API_VERSION = 'v1';
const DEFAULT_PAGE_SIZE = 10;
const PRODUCT_STATUS = {
  AVAILABLE: 'AVAILABLE',
  OUT_OF_STOCK: 'OUT_OF_STOCK',
  DISCONTINUED: 'DISCONTINUED',
};

// ✅ ĐÚNG - Enum-like constants
enum OrderStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  PREPARING = 'PREPARING',
  READY = 'READY',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

// ❌ SAI
const jwtSecret = process.env.JWT_SECRET;  // camelCase
const JwtSecret = process.env.JWT_SECRET;  // PascalCase
const JWT_secret = process.env.JWT_SECRET; // Mixed
```

### Local Constants - camelCase (nếu chỉ dùng trong hàm)

```typescript
async createOrder(dto: CreateOrderDto) {
  const taxRate = 0.1;        // ✅ Local const - camelCase OK
  const deliveryFee = 5000;   // ✅ Local const - camelCase OK
  
  const GLOBAL_CONST = 100;   // ❌ Không nên dùng UPPER nếu local
}
```

---

## 5. INTERFACES & TYPES

### PascalCase (Giống class)

```typescript
// ✅ ĐÚNG
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  createdAt: Date;
}

interface CreateUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

type OrderStatus = 'PENDING' | 'PAID' | 'COMPLETED';

// ❌ SAI
interface user {}                  // camelCase
interface create_user_dto {}       // snake_case
type orderStatus = '...' | '...';  // camelCase
```

### Generic Types - PascalCase + Descriptive

```typescript
// ✅ ĐÚNG
interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

type Optional<T> = T | null;

interface CreateOrderResponse {
  orderId: string;
  status: string;
  totalPrice: number;
}

// ❌ SAI
interface response {}              // Quá chung chung
type T = string;                   // Chỉ dùng cho generic
```

---

## 6. DTOs (Data Transfer Objects)

### Naming Pattern: `<Action><Entity>Dto.ts`

```typescript
// ✅ ĐÚNG FILE NAMES
create-user.dto.ts
login.dto.ts
update-order.dto.ts
create-order.dto.ts
auth-response.dto.ts

// ✅ ĐÚNG CLASS NAMES
export class CreateUserDto {
  email: string;
  password: string;
}

export class LoginDto {
  email: string;
  password: string;
}

export class AuthResponseDto {
  id: string;
  email: string;
  accessToken: string;
}

// ❌ SAI
export class CreateUserRequest {}   // "Request" instead of "Dto"
export class UserCreateDto {}       // Không follow pattern
export class create_user_dto {}     // File name snake_case OK nhưng class PascalCase
```

---

## 7. DECORATORS & GUARDS

### Method Decorators - @lowercase hoặc @PascalCase

```typescript
// ✅ ĐÚNG - Built-in NestJS
@Controller('api/v1/users')
@Post()
@Get(':id')
@UseGuards(JwtGuard)
@IsEmail()
@MinLength(8)

// Custom decorators - @camelCase or @PascalCase
@CurrentUser()
@RequireRole('admin')
@LogActivity()

// ❌ SAI
@controller()            // lowercase
@POST()                  // Inconsistent
@UseGuard()              // Singular (should be UseGuards)
```

---

## 8. DATABASE & PRISMA

### Column Names - snake_case (SQL convention)

```prisma
// ✅ ĐÚNG - schema.prisma
model User {
  id String @id @default(uuid())
  email String @unique
  password_hash String      // snake_case for DB
  first_name String?
  last_name String?
  is_active Boolean @default(true)
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
  
  orders Order[]
  
  @@map("users")           // Table name: plural, lowercase
}

model Order {
  id String @id @default(uuid())
  user_id String
  status String @default("PENDING")
  total_price Decimal @db.Decimal(10, 2)
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
  
  user User @relation(fields: [user_id], references: [id])
  order_items OrderItem[]
  
  @@map("orders")
}

// ❌ SAI
model User {
  userId String              // camelCase (not SQL convention)
  passwordHash String        // camelCase
  firstName String           // camelCase
  CreatedAt DateTime         // PascalCase
}
```

### Property Names in Entity/Service - camelCase (TS convention)

```typescript
// ✅ ĐÚNG - TypeScript uses camelCase
export interface User {
  id: string;
  email: string;
  passwordHash: string;      // camelCase in TS
  firstName: string;
  lastName: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// In service
async getUser(id: string): Promise<User> {
  const user = await this.prisma.user.findUnique({
    where: { id },
  });
  
  return {
    id: user.id,
    email: user.email,
    passwordHash: user.password_hash,  // Map from DB snake_case to TS camelCase
    firstName: user.first_name,
    lastName: user.last_name,
    isActive: user.is_active,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
  };
}
```

---

## 9. API ENDPOINTS

### Route Names - kebab-case (lowercase + hyphen)

```typescript
// ✅ ĐÚNG
@Controller('api/v1/users')
@Post('/register')          // POST /api/v1/users/register
@Post('/login')             // POST /api/v1/users/login
@Get('/me')                 // GET /api/v1/users/me
@Get(':id')                 // GET /api/v1/users/:id
@Put(':id')                 // PUT /api/v1/users/:id

@Controller('api/v1/products')
@Get()                      // GET /api/v1/products
@Get(':id')                 // GET /api/v1/products/:id
@Post()                     // POST /api/v1/products

@Controller('api/v1/orders')
@Post()                     // POST /api/v1/orders
@Get('/:id')                // GET /api/v1/orders/:id
@Get('/my/history')         // GET /api/v1/orders/my/history

// ❌ SAI
@Post('/Register')          // PascalCase
@Post('/registerUser')      // camelCase
@Get('/user-list')          // OK but "list" tidak cần, dùng GET without param
@Post('/api/v1/USERS')      // UPPER_CASE
```

### Query Parameters - camelCase

```typescript
// ✅ ĐÚNG
GET /api/v1/products?page=1&limit=10&sortBy=name
GET /api/v1/orders?userId=123&status=PAID&fromDate=2026-01-01

// ❌ SAI
GET /api/v1/products?Page=1&Limit=10    // PascalCase
GET /api/v1/orders?user_id=123          // snake_case
```

---

## 10. ERROR MESSAGES

### Error Messages - Rõ ràng, Tiếng Việt hoặc Tiếng Anh

```typescript
// ✅ ĐÚNG
throw new BadRequestException('Email is required');
throw new ConflictException('Email already registered');
throw new UnauthorizedException('Invalid credentials');
throw new NotFoundException('User not found');

// ❌ SAI
throw new Error('ERR_001');         // Error code without message
throw new Error('Failed!');         // Không rõ
throw new Error('error');           // lowercase
```

---

# 🔵 FRONTEND (React + TypeScript + Next.js)

## 1. VARIABLES & STATE

### Local Variables - camelCase

```typescript
// ✅ ĐÚNG
const userName = 'John';
const userCount = 5;
const isLoading = true;
const totalPrice = 150000;
const productList = [...];

// ❌ SAI
const user_name = 'John';
const UserName = 'John';
const USERNAME = 'John';
```

### State Variables (React Hooks) - camelCase

```typescript
// ✅ ĐÚNG
const [userName, setUserName] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
const [productList, setProductList] = useState([]);

// ❌ SAI
const [user_name, setUserName] = useState('');
const [UserName, setUserName] = useState('');
const [loading, setLoading] = useState(false);  // ❌ Không có "is" prefix
```

---

## 2. COMPONENT NAMES

### Component Functions - PascalCase

```typescript
// ✅ ĐÚNG FILE NAMES
ProductCard.tsx
LoginForm.tsx
UserProfile.tsx
CartItem.tsx
SizeSelector.tsx

// ✅ ĐÚNG COMPONENT EXPORT
export default function ProductCard() {}
export default function LoginForm() {}
export function UserProfile() {}  // Named export OK

// ❌ SAI FILE NAMES
productCard.tsx                  // camelCase
Product_Card.tsx                 // snake_case
PRODUCTCARD.tsx                  // UPPER_CASE

// ❌ SAI EXPORT
export default function productCard() {}  // camelCase
export default function product_card() {} // snake_case
```

---

## 3. PAGE COMPONENTS (Next.js)

### File Names - lowercase

```typescript
// ✅ ĐÚNG - Next.js Pages
frontend/src/app/menu/page.tsx
frontend/src/app/product/[id]/page.tsx
frontend/src/app/cart/page.tsx
frontend/src/app/auth/login/page.tsx
frontend/src/app/auth/register/page.tsx

// ✅ ĐÚNG COMPONENT
export default function MenuPage() {}       // Component: PascalCase
export default function ProductDetailPage() {}
export default function LoginPage() {}

// ❌ SAI - Folder names
frontend/src/app/Menu/page.tsx             // PascalCase folder
frontend/src/app/CART/page.tsx             // UPPER_CASE folder
```

---

## 4. HOOKS

### Hook Names - useXXX (camelCase with "use" prefix)

```typescript
// ✅ ĐÚNG FILE NAMES
useAuth.ts
useCart.ts
useProduct.ts
useFetch.ts

// ✅ ĐÚNG FUNCTION NAMES
export function useAuth() {
  return { user, login, logout };
}

export const useCart = () => {
  const [items, setItems] = useState([]);
  return { items, addItem, removeItem };
};

// ❌ SAI
function Auth() {}               // No "use" prefix
function getAuth() {}            // "get" instead of "use"
function authHook() {}           // Tên không rõ
function use_auth() {}           // snake_case
```

---

## 5. STORES (Zustand)

### Store Names - camelCase with "Store" suffix

```typescript
// ✅ ĐÚNG FILE NAMES
cartStore.ts
authStore.ts
productStore.ts

// ✅ ĐÚNG FUNCTION NAMES
export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => ({ items: state.items.filter(i => i.id !== id) })),
}));

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  accessToken: null,
  setUser: (token, user) => set({ accessToken: token, user }),
}));

// ❌ SAI
export const CartStore = create() {}         // No "use" prefix
export const cart_store = create() {}        // snake_case
export const useCart = create() {}           // Missing "Store"
```

---

## 6. API & AXIOS

### API Function Names - camelCase

```typescript
// ✅ ĐÚNG FILE NAME
api/auth.ts
api/products.ts
api/orders.ts

// ✅ ĐÚNG FUNCTION NAMES
export const register = async (email: string, password: string) => {};
export const login = async (email: string, password: string) => {};
export const getProducts = async () => {};
export const getProductById = async (id: string) => {};
export const createOrder = async (dto: CreateOrderDto) => {};

// ❌ SAI
export const Register = async () => {};      // PascalCase
export const REGISTER = async () => {};      // UPPER_CASE
export const register_user = async () => {}; // snake_case
```

### Response Variable Names - camelCase

```typescript
// ✅ ĐÚNG
const response = await fetch('/api/products');
const data = await response.json();
const user = data.data;  // From API response
const message = data.message;
const statusCode = data.statusCode;

// ❌ SAI
const Response = await fetch('/api/products');  // PascalCase
const DATA = await response.json();             // UPPER_CASE
```

---

## 7. EVENT HANDLERS

### Handler Names - onXXX or handleXXX

```typescript
// ✅ ĐÚNG - React event handlers (onXXX)
<button onClick={onClick}>Click</button>
<input onChange={onChange} />
<form onSubmit={onSubmit}>
<select onSelect={onSelect} />

// ✅ ĐÚNG - Custom handlers (handleXXX)
const handleSubmit = (e: React.FormEvent) => {};
const handleClick = () => {};
const handleChange = (value: string) => {};
const handleDelete = (id: string) => {};

// ❌ SAI
const Submit = () => {};           // No prefix
const submitForm = () => {};       // "submit" instead of "handle"
const on_submit = () => {};        // snake_case
```

---

## 8. CSS & TAILWIND CLASSES

### Class Names - kebab-case (lowercase + hyphen)

```typescript
// ✅ ĐÚNG Tailwind
className="container mx-auto px-4"
className="flex items-center justify-center"
className="bg-emerald-600 text-white rounded-lg"
className="hover:bg-emerald-700 transition-colors"

// ✅ ĐÚNG Custom CSS Classes
className="product-card"
className="user-profile-header"
className="cart-item-container"
className="btn-primary"
className="form-input"

// ❌ SAI
className="ProductCard"             // PascalCase
className="product_card"            // snake_case
className="PRODUCTCARD"             // UPPER_CASE
className="productCard"             // camelCase
```

### CSS in JS (if used)

```typescript
// ✅ ĐÚNG
const styles = {
  containerWrapper: {
    display: 'flex',
    justifyContent: 'center',  // camelCase for CSS properties
  },
  productTitle: {
    fontSize: '24px',
    color: '#333',
  },
};

// ❌ SAI
const styles = {
  container-wrapper: {          // CSS property names should use camelCase
    'display': 'flex',
  },
};
```

---

## 9. TYPES & INTERFACES

### Same as Backend

```typescript
// ✅ ĐÚNG
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}

interface CartItem {
  productId: string;
  quantity: number;
  size: 'S' | 'M' | 'L';
  toppings: string[];
  priceAtAdded: number;
}

// ❌ SAI
interface user {}              // camelCase
interface User_Profile {}      // snake_case
interface USER {}              // UPPER_CASE
```

---

## 10. CONSTANTS

### Component Constants - camelCase or UPPER_SNAKE_CASE

```typescript
// ✅ ĐÚNG - Global/Component constants
const PRODUCT_SIZE = ['S', 'M', 'L'] as const;
const DEFAULT_PAGE_SIZE = 10;
const MAX_QUANTITY = 100;

const toppingOptions = [
  { id: '1', name: 'Trân châu', price: 2000 },
  { id: '2', name: 'Kem', price: 1000 },
];

// ❌ SAI
const product_size = [];       // snake_case
const ProductSize = [];        // PascalCase
const productSize = [];        // camelCase (OK for local, but use UPPER for shared)
```

---

# 🔄 SPECIAL CASES

## Boolean Variables - "is", "has", "can" prefix

### Backend

```typescript
// ✅ ĐÚNG
isActive: boolean;
isEmailVerified: boolean;
hasPermission: boolean;
canDelete: boolean;
isLoading: boolean;
isError: boolean;

// ❌ SAI
active: boolean;               // Không rõ
email_verified: boolean;       // snake_case
permission: boolean;           // Không rõ
```

### Frontend

```typescript
// ✅ ĐÚNG
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [hasMore, setHasMore] = useState(true);
const [canDelete, setCanDelete] = useState(false);

// ❌ SAI
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
```

---

## Async Functions - Same as Regular

```typescript
// ✅ ĐÚNG - No special prefix for async
async function getUser(id: string) {}
async function createOrder(dto: CreateOrderDto) {}
const fetchProducts = async () => {};

// ❌ SAI - No "async" prefix
async function asyncGetUser() {}
async function getAsync() {}
```

---

## Array Variables - Plural or Array suffix

```typescript
// ✅ ĐÚNG
const users = [];
const products = [];
const orders = [];
const items = [];

// ✅ ĐÚNG - With Array suffix (if ambiguous)
const userList = [];
const productArray = [];

// ❌ SAI
const user = [];                   // Singular for array
const product = [];
const userArray = [];              // Không nhất quán
```

---

# 📋 SUMMARY TABLE

| Category | Backend | Frontend | Example |
|----------|---------|----------|---------|
| **Variables** | camelCase | camelCase | `userName`, `isActive` |
| **Constants** | UPPER_SNAKE | UPPER_SNAKE | `JWT_SECRET`, `MAX_ITEMS` |
| **Functions** | camelCase | camelCase + on/handle | `getUser()`, `handleSubmit()` |
| **Classes** | PascalCase | PascalCase (components) | `UserService`, `ProductCard` |
| **Interfaces** | PascalCase | PascalCase | `User`, `CreateOrderDto` |
| **Files** | camelCase + suffix | PascalCase/page.tsx | `user.entity.ts`, `ProductCard.tsx` |
| **API Routes** | kebab-case | - | `/api/v1/products`, `/auth/login` |
| **Database** | snake_case | - | `user_id`, `created_at` |
| **CSS Classes** | - | kebab-case | `.product-card`, `.btn-primary` |
| **Hooks** | - | camelCase + use | `useAuth`, `useCart` |
| **Stores** | - | camelCase + Store | `authStore`, `cartStore` |

---

## ✅ CHECKLIST

**Khi code, check:**

- [ ] Variable: camelCase
- [ ] Constant: UPPER_SNAKE_CASE
- [ ] Function: camelCase + động từ ở đầu
- [ ] Class/Component: PascalCase
- [ ] Interface/Type: PascalCase
- [ ] Boolean: "is", "has", "can" prefix
- [ ] Array: Plural hoặc Array suffix
- [ ] File name: Follow folder convention
- [ ] API route: kebab-case
- [ ] Database: snake_case (schema), camelCase (TS)

---

**Last Updated:** 23/09/2026  
**Version:** 1.0

---

**Questions? Ask lead!** 💬



---

# PHẦN IV — TÀI LIỆU ĐẶC TẢ USE CASE

**Nguồn:** `Tài liệu đặc tả .docx`

---

01. TỔNG QUAN
Tên Use Case: Khách hàng đặt hàng và thanh toán
Actor chính: Khách hàng (Customer) - người sử dụng ứng dụng BrewLite để mua cà phê
Mục tiêu: Khách hàng muốn duyệt danh sách sản phẩm cà phê, chọn các sản phẩm yêu thích (với các tuỳ chọn như size, topping), đưa chúng vào giỏ hàng, xem xét danh sách sản phẩm trong giỏ, tiến hành thanh toán bằng một trong các phương thức có sẵn, và cuối cùng nhận được xác nhận đơn hàng cùng thông tin trạng thái đơn hàng thời gian thực.
Mức độ: Use Case chính
2. ĐIỀU KIỆN TRƯỚC (PRECONDITIONS)
Trước khi Use Case này bắt đầu, các điều kiện sau phải được thỏa mãn. Ứng dụng BrewLite đã được khởi động và sẵn sàng hoạt động. Danh sách sản phẩm cà phê (ít nhất 10 sản phẩm) đã được tải từ server và hiển thị trên trang Menu. Hệ thống thanh toán mock (mock payment gateway) đã được cấu hình và sẵn sàng để xử lý các yêu cầu thanh toán. Khách hàng có thể đang ở trạng thái chưa đăng nhập khi xem menu và giỏ hàng. Tuy nhiên, để tiến hành đặt đơn và thanh toán, khách hàng bắt buộc phải đăng nhập vào hệ thống. 
3. LUỒNG CHÍNH (MAIN FLOW)
Bước 1: Mở ứng dụng và xem Menu
Khách hàng mở ứng dụng BrewLite. Ứng dụng hiển thị trang Menu với danh sách các sản phẩm cà phê. Mỗi sản phẩm được hiển thị dưới dạng một thẻ (card) chứa thông tin: hình ảnh sản phẩm, tên sản phẩm, và giá cơ sở. Khách hàng có thể cuộn danh sách để xem thêm sản phẩm. Trang Menu cho phép khách hàng tương tác với các sản phẩm bằng cách click vào bất kỳ sản phẩm nào họ quan tâm.
Bước 2: Xem chi tiết sản phẩm
Khách hàng click vào một sản phẩm (ví dụ: Cappuccino). Ứng dụng chuyển hướng sang trang Product Detail, nơi hiển thị thông tin chi tiết về sản phẩm bao gồm hình ảnh sản phẩm (kích thước lớn hơn), tên sản phẩm, mô tả sản phẩm, và giá cơ sở (ví dụ: 45,000đ).
Bước 3: Lựa chọn kích thước sản phẩm
Trên trang Product Detail, hệ thống hiển thị các tuỳ chọn kích thước dưới dạng ba nút: S (Small), M (Medium), L (Large). Mặc định, kích thước M được chọn. Khách hàng có thể click trên bất kỳ nút kích thước nào để thay đổi lựa chọn. Giá của sản phẩm có thể thay đổi tùy theo kích thước được chọn. Ứng dụng hiển thị giá realtime sau mỗi lần khách hàng thay đổi kích thước.
Bước 4: Lựa chọn topping
Hệ thống hiển thị danh sách các topping có sẵn dưới dạng các checkbox. Các tuỳ chọn topping bao gồm: Trân châu (+5,000đ), Kem (7,000đ), Sirô caramel (+6,000đ), thạch (+5,000đ) và các tuỳ chọn khác. Khách hàng có thể check hoặc uncheck bất kỳ topping nào mà họ muốn. Khách hàng cũng có thể chọn không chọn bất kỳ topping nào nếu họ không muốn. Mỗi khi khách hàng check hoặc uncheck một topping, giá sản phẩm sẽ tự động cập nhật để phản ánh thay đổi này.
Bước 5: Hiển thị giá realtime
Ứng dụng hiển thị giá tính toán realtime sau khi khách hàng hoàn thành lựa chọn size và topping. Giá hiển thị dưới dạng: Giá cơ sở + chi phí từ các topping đã chọn = Tổng giá cho một sản phẩm. Ví dụ: 45,000đ (cơ sở) + 2,000đ (trân châu) + 1,000đ (kem) = 48,000đ. Giá này sẽ được sử dụng để tính tổng giá trong giỏ hàng.
Bước 6: Lựa chọn số lượng
Ứng dụng hiển thị một ô số lượng với nút giảm (-), hiển thị số lượng hiện tại (mặc định là 1), và nút tăng (+). Khách hàng có thể nhấn nút (+) để tăng số lượng hoặc nút (-) để giảm số lượng. Mỗi lần thay đổi số lượng, tổng giá sản phẩm sẽ được tính toán lại. Ví dụ: Nếu khách hàng chọn số lượng 3, giá sẽ được nhân với 3 (48,000đ × 3 = 144,000đ).
Bước 7: Thêm sản phẩm vào giỏ hàng
Khách hàng click vào nút "Thêm vào giỏ hàng" (Add to Cart button). Ứng dụng thêm sản phẩm (với kích thước, topping, và số lượng đã chọn) vào giỏ hàng. Hệ thống hiển thị một thông báo xác nhận dạng toast: "✅ Đã thêm Cappuccino vào giỏ hàng". Badge giỏ hàng ở góc trên cùng của ứng dụng được cập nhật để hiển thị số lượng sản phẩm trong giỏ (ví dụ: 🛒 1). Trang Product Detail vẫn được giữ nguyên, không redirect, cho phép khách hàng tiếp tục mua sắm nếu muốn.
Bước 8: Quay lại Menu hoặc xem giỏ hàng
Khách hàng có hai lựa chọn: (1) Click nút "Tiếp tục mua sắm" để quay lại trang Menu và chọn thêm sản phẩm khác, hoặc (2) Click vào badge giỏ hàng hoặc nút "Xem giỏ hàng" để chuyển sang trang Cart. Giả sử khách hàng muốn kiểm tra giỏ hàng, họ click vào badge giỏ hàng.
Bước 9: Xem nội dung giỏ hàng
Ứng dụng hiển thị trang Cart với danh sách tất cả các sản phẩm mà khách hàng đã thêm vào giỏ. Mỗi sản phẩm trong giỏ được hiển thị với các thông tin sau: tên sản phẩm, kích thước đã chọn, các topping đã chọn, số lượng, và giá từng dòng. Trang Cart cũng hiển thị tổng giá của tất cả các sản phẩm trong giỏ. Khách hàng có thể xem chi tiết từng sản phẩm và làm các hành động khác nếu cần (xem Alternative Flows).
Bước 10: Đăng nhập (Yêu cầu bắt buộc) 
Khách hàng click vào nút "Thanh toán" (Checkout button) ở trang Cart. Hệ thống kiểm tra trạng thái xác thực. Nếu khách hàng chưa đăng nhập, ứng dụng chuyển hướng sang trang Login/Register. Khách hàng nhập email, password để đăng nhập (hoặc tạo tài khoản mới). Sau khi xác thực thành công và hệ thống cấp JWT token, ứng dụng tiếp tục luồng đặt hàng. 
Bước 11: Xem lại đơn hàng và Áp mã giảm giá 
Ứng dụng chuyển hướng sang trang Checkout. Hệ thống hiển thị lại danh sách sản phẩm, tổng giá tiền. Tại đây, khách hàng có thể nhập mã giảm giá (voucher) nếu có. Hệ thống sẽ kiểm tra tính hợp lệ của mã khuyến mãi và tự động trừ đi số tiền được giảm vào tổng thanh toán cuối cùng. 
Bước 12: Lựa chọn phương thức thanh toán
Hệ thống hiển thị các tuỳ chọn phương thức thanh toán dưới dạng các nút radio: Ví điện tử (Momo, VNPay, v.v.), hoặc Thẻ tín dụng / Thẻ ghi nợ. Mặc định, "Ví điện tử" được chọn. Khách hàng có thể click trên bất kỳ tuỳ chọn nào để thay đổi phương thức thanh toán.
Bước 13: Xác nhận thanh toán và tạo đơn hàng(Trạng thái PENDING)
Khách hàng click vào nút "Xác nhận thanh toán" (Confirm Payment button) để tiến hành thanh toán. Ứng dụng gọi API POST /orders để tạo một Order record mới trong database với trạng thái PENDING. Đơn hàng được cấp Order ID (ví dụ: #1042). Đồng thời, hệ thống tạo ra một Idempotency-Key (Khóa xác định tính duy nhất) gắn với phiên giao dịch này để đảm bảo không bị trừ tiền hoặc xử lý trùng lặp. Ứng dụng hiển thị overlay loading: "Đang xử lý thanh toán...". 
Bước 14: Xử lý thanh toán (Mock Payment Gateway)
Hệ thống gọi API POST /payments gửi yêu cầu đến mock payment gateway kèm theo Order ID và Idempotency-Key. Mock gateway mô phỏng một cổng thanh toán thực tế và trả về kết quả ngẫu nhiên: 50% SUCCESS (thanh toán thành công) hoặc 50% FAILURE (thanh toán thất bại). Giả sử trong trường hợp này, gateway trả về SUCCESS.
Bước 15: Thanh toán thành công - Tạo đơn hàng
Khi mock gateway trả về kết quả SUCCESS, hệ thống cập nhật trạng thái đơn hàng từ PENDING sang PAID . Order này chứa các thông tin sau: Order ID (ví dụ: #1042), Status (PAID), Total (tổng giá), Items (danh sách sản phẩm với size, topping, qty của mỗi sản phẩm), Timestamp (thời gian tạo đơn hàng), và Payment Method (phương thức thanh toán khách hàng chọn). Order được lưu trữ trong database để theo dõi sau này.
Bước 16: Hiển thị trang xác nhận
Overlay loading được ẩn, và ứng dụng hiển thị trang Confirmation (xác nhận). Trang này hiển thị một tin nhắn xác nhận: "✅ ĐẶT HÀNG THÀNH CÔNG!", cùng với các chi tiết của đơn hàng: Mã đơn hàng (#1042), Trạng thái (ĐANG CHỜ PHA CHẾ), Chi tiết các sản phẩm trong đơn, Tổng giá, Phương thức thanh toán, và Số điểm thường vừa được cộng. Trang này cũng có thể hiển thị một thông báo hướng dẫn khách hàng: "Mời bạn tới quầy lấy nước của bạn".
Bước 17: Redirect sang trang Order Status
Sau đó hệ thống sẽ tự động redirect khách hàng sang trang Order Status (Trạng thái đơn hàng). Trang này hiển thị trạng thái hiện tại của đơn hàng #1042, bao gồm một progress bar hoặc timeline hiển thị các bước: PAID (đã thanh toán) ✅, PREPARING (đang pha chế) ⏳, READY (sẵn sàng) ○, và COMPLETED (đã hoàn thành) ○. Khách hàng có thể xem real-time khi barista pha chế sản phẩm, và trạng thái sẽ tự động cập nhật khi tiến độ thay đổi.
4. LUỒNG THAY THẾ (ALTERNATIVE FLOWS)
Alternative 1: Thay đổi kích thước sản phẩm trước khi thêm vào giỏ
Trong quá trình khách hàng lựa chọn kích thước ở trang Product Detail, khách hàng có thể thay đổi kích thước nhiều lần trước khi click "Thêm vào giỏ hàng". Ví dụ, khách hàng ban đầu chọn kích thước S, nhưng sau đó thay đổi sang M, rồi lại thay đổi sang L. Mỗi lần khách hàng click trên một nút kích thước khác, giá sản phẩm sẽ tự động cập nhật để phản ánh sự thay đổi. Khi khách hàng cuối cùng click "Thêm vào giỏ hàng", sản phẩm sẽ được thêm vào giỏ với kích thước mới nhất mà khách hàng đã chọn (L trong ví dụ này). Luồng này kết thúc giống như luồng chính.
Alternative 2: Thêm hoặc bớt topping trước khi thêm vào giỏ
Khách hàng có thể thay đổi lựa chọn topping nhiều lần trước khi click "Thêm vào giỏ hàng". Ví dụ, khách hàng ban đầu chọn "Trân châu" và "Kem", nhưng sau đó nhận ra họ không muốn "Kem", nên uncheck tuỳ chọn "Kem". Hoặc khách hàng không chọn bất kỳ topping nào ban đầu, nhưng sau đó muốn thêm "Sirô caramel", nên check tuỳ chọn này. Mỗi lần thay đổi, giá sản phẩm sẽ cập nhật. Khi khách hàng cuối cùng click "Thêm vào giỏ hàng", sản phẩm sẽ được thêm với danh sách topping cuối cùng. Luồng này kết thúc giống như luồng chính.
Alternative 3: Thay đổi số lượng sản phẩm
Khách hàng có thể thay đổi số lượng sản phẩm bằng cách click nút (+) để tăng hoặc nút (-) để giảm số lượng trước khi click "Thêm vào giỏ hàng". Ví dụ, khách hàng chọn số lượng = 3 thay vì 1. Tổng giá sản phẩm sẽ được tính lại tương ứng. Khi khách hàng click "Thêm vào giỏ hàng", 3 sản phẩm sẽ được thêm vào giỏ. Luồng này kết thúc giống như luồng chính.
Alternative 4: Xóa sản phẩm khỏi giỏ hàng
Trên trang Cart, khách hàng có thể thấy nút "Xóa" (✕) cạnh mỗi sản phẩm. Khách hàng click vào nút "Xóa" để loại bỏ sản phẩm đó khỏi giỏ hàng. Ứng dụng có thể hiển thị một hộp thoại xác nhận yêu cầu khách hàng xác nhận việc xóa. Nếu khách hàng xác nhận, sản phẩm sẽ bị xóa khỏi giỏ. Tổng giá của giỏ hàng sẽ được cập nhật để loại trừ giá của sản phẩm bị xóa. Hệ thống hiển thị thông báo toast: "✅ Đã xóa [tên sản phẩm] khỏi giỏ hàng". Khách hàng có thể tiếp tục mua sắm hoặc tiến hành thanh toán.
Alternative 5: Chỉnh sửa sản phẩm trong giỏ hàng
Trên trang Cart, khách hàng có thể thấy nút "Sửa" (✎) cạnh mỗi sản phẩm. Khách hàng click vào nút "Sửa" để thay đổi các tuỳ chọn của sản phẩm (kích thước, topping, số lượng). Ứng dụng chuyển hướng khách hàng quay lại trang Product Detail của sản phẩm đó, nhưng các tuỳ chọn (kích thước, topping, số lượng) sẽ được tải trước với các giá trị mà khách hàng đã chọn lúc trước. Khách hàng có thể thay đổi bất kỳ tuỳ chọn nào. Khi khách hàng click "Cập nhật giỏ hàng" (thay vì "Thêm vào giỏ hàng"), sản phẩm trong giỏ sẽ được cập nhật với các tuỳ chọn mới. Ứng dụng quay trở lại trang Cart, và khách hàng có thể thấy sản phẩm đã được chỉnh sửa cùng với giá mới.
Alternative 6: Thay đổi phương thức thanh toán ở trang Checkout
Trên trang Checkout, sau khi khách hàng đã chọn một phương thức thanh toán, khách hàng có thể thay đổi lựa chọn bằng cách click trên một tuỳ chọn phương thức khác. Ví dụ, khách hàng ban đầu chọn "Ví điện tử" nhưng sau đó thay đổi sang "Thẻ tín dụng". Tuỳ chọn phương thức thanh toán sẽ được cập nhật. Khách hàng sau đó click "Xác nhận thanh toán" để tiếp tục với phương thức thanh toán mới.
Alternative 7: Thử lại thanh toán khi thanh toán thất bại
Nếu mock payment gateway trả về FAILURE (thay vì SUCCESS trong luồng chính),hệ thống sẽ cập nhật trạng thái đơn hàng thành PAYMENT_FAILED. Ứng dụng sẽ hiển thị một thông báo: "❌ THANH TOÁN THẤT BẠI" cùng với lý do tại sao thanh toán thất bại (ví dụ: "Ví điện tử không đủ số dư"). Thông báo lỗi này sẽ cung cấp một nút "Thử lại" cho phép khách hàng retry thanh toán. Nếu khách click "Thử lại", hệ thống chuyển trạng thái đơn hàng từ PAYMENT_FAILED về lại PENDING, sau đó gọi lại cổng thanh toán (sử dụng cùng Idempotency-Key nếu là cùng giao dịch hoặc cấp mới tùy logic hệ thống). Lần này, thanh toán có thể SUCCESS (và luồng tiếp tục như luồng chính) hoặc FAILURE lần nữa. Khách hàng có thể retry nhiều lần cho đến khi thành công. (Xem Exception Flows để chi tiết hơn)
Alternative 8: Hủy thanh toán và quay lại giỏ hàng
Tại màn hình báo lỗi thanh toán, nếu khách hàng chọn "Quay lại" hoặc "Hủy", hệ thống sẽ cập nhật trạng thái đơn hàng thành CANCELLED (như sơ đồ máy trạng thái). Đơn hàng này bị hủy vĩnh viễn và khách hàng được đưa trở lại trang Giỏ hàng để có thể lên một đơn hàng hoàn toàn mới. .
5. LUỒNG NGOẠI LỆ (EXCEPTION FLOWS)
Exception 1: Sản phẩm hết hàng (Insufficient Stock)
Trường hợp này có thể xảy ra ở hai giai đoạn: (1) Khi khách hàng ở trang Product Detail và muốn thêm sản phẩm vào giỏ, hoặc (2) Khi khách hàng ở trang Cart sắp thanh toán, phát hiện ra một sản phẩm trong giỏ đã hết hàng trong kho.
Nếu sản phẩm hết hàng ở trang Detail, ứng dụng sẽ hiển thị một thông báo: "❌ SẢN PHẨM HẾT HÀNG" cùng với tin nhắn: "Tạm thời sản phẩm này không có sẵn. Vui lòng quay lại sau hoặc chọn sản phẩm khác." Nút "Thêm vào giỏ hàng" sẽ bị vô hiệu hóa hoặc ẩn đi, không cho phép khách hàng thêm sản phẩm này. Khách hàng có thể click "Quay lại menu" để trở về trang Menu và chọn sản phẩm khác.
Nếu sản phẩm hết hàng được phát hiện ở trang Cart (ví dụ, khách hàng có 2 ly Trà đào trong giỏ nhưng kho chỉ còn 0 ly), ứng dụng sẽ hiển thị một thông báo cảnh báo khi khách hàng click "Thanh toán". Thông báo này sẽ cho biết sản phẩm nào bị hết hàng và ứng dụng sẽ tự động xóa sản phẩm đó khỏi giỏ. Giỏ hàng sẽ được cập nhật lại, và tổng giá sẽ được tính toán lại. Khách hàng có thể lựa chọn tiếp tục thanh toán với các sản phẩm còn lại hoặc quay lại giỏ để thêm sản phẩm khác.
Exception 2: Thanh toán thất bại (Payment Failure)
Khi khách hàng click "Xác nhận thanh toán", đơn hàng đã được tạo thành công trong database với trạng thái ban đầu là PENDING. Ứng dụng tiếp tục gọi API thanh toán POST /payments. Tuy nhiên, mock payment gateway có thể trả về kết quả FAILURE (50% xác suất). Khi này, overlay loading sẽ bị ẩn, và hệ thống sẽ tự động cập nhật trạng thái của đơn hàng từ PENDING sang PAYMENT_FAILED.
Ứng dụng sẽ hiển thị một thông báo lỗi chi tiết: "❌ THANH TOÁN THẤT BẠI" cùng với lý do cụ thể (ví dụ: "Thẻ của bạn không đủ số dư"). Tại màn hình này, khách hàng có hai tuỳ chọn:
(1) Chọn "Thử lại": Nếu khách hàng chọn thử lại, hệ thống sẽ chuyển trạng thái đơn hàng từ PAYMENT_FAILED quay trở về PENDING, sau đó gọi lại cổng thanh toán một lần nữa (sử dụng cùng Idempotency-Key để đánh dấu đây vẫn là cùng một giao dịch). Quá trình này lặp lại cho đến khi gateway trả về SUCCESS hoặc khách hàng chọn hủy.
(2) Chọn "Hủy thanh toán": Nếu khách hàng không muốn tiếp tục, họ click "Quay lại" hoặc "Hủy". Hệ thống sẽ chuyển trạng thái của đơn hàng này từ PAYMENT_FAILED sang trạng thái kết thúc là CANCELLED. Đơn hàng này chính thức bị hủy bỏ vĩnh viễn trên database. Khách hàng được đưa trở lại giao diện Menu hoặc Giỏ hàng.
.
Exception 3: Lỗi xác thực chung (Validation Error)
Lỗi xác thực có thể xảy ra ở nhiều điểm trong Use Case, chẳng hạn như khi khách hàng nhập dữ liệu không hợp lệ. Ví dụ, nếu khách hàng cố gắng nhập số lượng âm (ví dụ: -1) hoặc số lượng là 0, ứng dụng sẽ hiển thị một thông báo lỗi: "❌ Số lượng phải ≥ 1". Nếu khách hàng nhập giá trị không phải là số (ví dụ: "abc"), ứng dụng sẽ hiển thị: "❌ Vui lòng nhập số nguyên dương". Nếu khách hàng cố gắng nhập số lượng vượt quá giới hạn cho phép, ứng dụng sẽ hiển thị: "❌ Số lượng vượt quá giới hạn (...)".
Tương tự, khi khách hàng tạo tài khoản ở Bước 10 và nhập email không hợp lệ (ví dụ: "email-không-hợp-lệ"), hoặc nhập mã giảm giá không tồn tại ở Bước 11, ứng dụng sẽ hiển thị thông báo lỗi tương ứng và chặn thao tác tiếp theo cho đến khi dữ liệu được nhập đúng.
Trong tất cả các trường hợp này, ứng dụng sẽ không cho phép khách hàng tiếp tục cho đến khi họ nhập lại dữ liệu hợp lệ. Thông báo lỗi sẽ hướng dẫn khách hàng cách sửa lỗi.
6. ĐIỀU KIỆN KẾT THÚC (POSTCONDITIONS)
Khi Use Case kết thúc thành công (khách hàng đã được redirect sang trang Order Status), các điều kiện sau phải được thỏa mãn:
Một Order record mới được tạo trong database với các thông tin: Order ID được sinh ra tự động (ví dụ: #1042), Status của đơn hàng được đặt là PAID (thanh toán thành công), Total là tổng giá đã được khách hàng xác nhận, Items là danh sách các sản phẩm trong đơn (bao gồm thông tin chi tiết như size, topping, quantity của mỗi sản phẩm), Timestamp( createdAt ) là thời gian Order được tạo, và Payment Method là phương thức thanh toán mà khách hàng đã chọn.
Các bản ghi chi tiết cũng được tạo trong database: Các dòng trong bảng orderItems được tạo, mỗi dòng đại diện cho một sản phẩm trong đơn hàng. Một bản ghi trong bảng payments được tạo để lưu trữ thông tin giao dịch thanh toán.
Tích điểm thưởng (Loyalty Points): Hệ thống tự động tính toán điểm tích lũy dựa trên tổng giá trị thanh toán của đơn hàng #1042 và cộng trực tiếp số điểm này vào trường loyaltyPoints trong bản ghi User của khách hàng 
Giỏ hàng được reset: Tất cả sản phẩm trong giỏ hàng của khách hàng được xóa. Badge giỏ hàng được reset về 0. Nếu khách hàng quay lại trang Menu hoặc trang Cart sau khi Order được tạo, giỏ hàng sẽ trống.
Khách hàng được redirect sang trang Order Status: Ứng dụng tự động điều hướng khách hàng sang trang Order Status, nơi hiển thị thông tin trạng thái đơn hàng hiện tại (PAID → PREPARING) cùng với progress bar hoặc timeline. Khách hàng có thể xem real-time khi barista pha chế sản phẩm.
7. NOTES & ASSUMPTIONS (GHI CHÚ & GIẢ ĐỊNH)
Giả định về Máy trạng thái (Order State Machine): Quá trình chuyển đổi trạng thái của đơn hàng bắt buộc phải tuân thủ nghiêm ngặt sơ đồ một chiều: PENDING → PAID → PREPARING → READY → COMPLETED. Mọi hành vi cố tình chuyển trạng thái không hợp lệ (nhảy cóc bước) sẽ bị hàm bảo vệ assertTransition chặn lại và ném ra lỗi.
Giả định về Tính lũy đẳng (Idempotency) trong thanh toán: Giả định rằng mỗi khi khách hàng bấm nút "Xác nhận thanh toán", client sẽ tạo ra một Idempotency-Key duy nhất gửi kèm trong request API POST /payments. Tính năng này đảm bảo rằng nếu khách hàng vô tình nhấn đúp (double-click) hoặc mạng bị lag khiến request gửi đi nhiều lần, hệ thống nhận diện được key này và chỉ xử lý thanh toán đúng 1 lần, tuyệt đối không trừ tiền khách hàng 2 lần.
Giả định về Kiểm soát tồn kho (Optimistic Locking): Để giải quyết bài toán nhiều người đặt cùng một món nước cùng một lúc (concurrent requests), giả định hệ thống sử dụng cơ chế Transaction kết hợp Optimistic Locking trong cơ sở dữ liệu. Hệ thống sẽ lock số lượng nguyên liệu trong một khoảnh khắc mili-giây để tính toán, ngăn chặn triệt để tình trạng bán vượt quá số lượng hàng còn tồn trong kho (overselling).
Giả định về Mock Payment Gateway: Giả định cổng thanh toán giả lập hoạt động trơn tru và trả về ngẫu nhiên các kết quả SUCCESS hoặc FAILURE để phục vụ việc kiểm thử (test) các luồng ngoại lệ.
Phạm vi của Use Case này dừng lại ở việc khách hàng nhìn thấy đơn hàng ở trạng thái PAID. Các bước từ PREPARING đến COMPLETED thuộc về Use Case của nhân viên pha chế (Barista).

---

# HẾT TÀI LIỆU TỔNG HỢP
