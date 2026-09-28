import { PrismaClient, OrderStatus, PaymentMethod, PaymentStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Đang xóa dữ liệu cũ (Clean up) ---');
  await prisma.payment.deleteMany();
  await prisma.orderItemTopping.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.productTopping.deleteMany();
  await prisma.productSize.deleteMany();
  await prisma.topping.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  console.log('--- Bắt đầu tạo dữ liệu mẫu ---');

  // ==========================================
  // 1. USERS (5 records)
  // ==========================================
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'nguyenvana@gmail.com',
        passwordHash: '$2b$10$hashedpassword111111111111111111111111111111111111',
        fullName: 'Nguyễn Văn An',
      },
    }),
    prisma.user.create({
      data: {
        email: 'tranthib@gmail.com',
        passwordHash: '$2b$10$hashedpassword222222222222222222222222222222222222',
        fullName: 'Trần Thị Bình',
      },
    }),
    prisma.user.create({
      data: {
        email: 'lehoangc@gmail.com',
        passwordHash: '$2b$10$hashedpassword333333333333333333333333333333333333',
        fullName: 'Lê Hoàng Cường',
      },
    }),
    prisma.user.create({
      data: {
        email: 'phamthid@gmail.com',
        passwordHash: '$2b$10$hashedpassword444444444444444444444444444444444444',
        fullName: 'Phạm Thị Dung',
      },
    }),
    prisma.user.create({
      data: {
        email: 'vovanem@gmail.com',
        passwordHash: '$2b$10$hashedpassword555555555555555555555555555555555555',
        fullName: 'Võ Văn Em',
      },
    }),
  ]);

  // ==========================================
  // 2. PRODUCTS (5 records)
  // ==========================================
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Cappuccino',
        description: 'Cà phê Ý đậm đà kết hợp bọt sữa béo ngậy nghệ thuật',
        basePrice: 45000,
        imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d',
        isActive: true,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Americano',
        description: 'Espresso pha loãng với nước nóng, vị đắng thanh khiết',
        basePrice: 35000,
        imageUrl: 'https://images.unsplash.com/photo-1551030173-122aabc4489c',
        isActive: true,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Cà phê sữa',
        description: 'Cà phê phin truyền thống hòa quyện cùng sữa đặc ngọt thơm',
        basePrice: 30000,
        imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772',
        isActive: true,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Trà đào',
        description: 'Trà thanh nhiệt kết hợp miếng đào giòn ngọt mát lạnh',
        basePrice: 40000,
        imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd',
        isActive: true,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Trà sữa trân châu',
        description: 'Trà sữa đen truyền thống béo thơm đi kèm trân châu dẻo',
        basePrice: 42000,
        imageUrl: 'https://images.unsplash.com/photo-1558857563-b37cfb442b03',
        isActive: true,
      },
    }),
  ]);

  // ==========================================
  // 3. TOPPINGS (5 records)
  // ==========================================
  const toppings = await Promise.all([
    prisma.topping.create({ data: { name: 'Trân châu đen', price: 8000, isActive: true } }),
    prisma.topping.create({ data: { name: 'Trân châu trắng', price: 10000, isActive: true } }),
    prisma.topping.create({ data: { name: 'Thạch cà phê', price: 7000, isActive: true } }),
    prisma.topping.create({ data: { name: 'Kem Cheese (Macchiato)', price: 12000, isActive: true } }),
    prisma.topping.create({ data: { name: 'Đào miếng thêm', price: 10000, isActive: true } }),
  ]);

  // ==========================================
  // 4. PRODUCT SIZES (5 records)
  // ==========================================
  const productSizes = await Promise.all([
    prisma.productSize.create({ data: { productId: products[0].id, size: 'M', extraPrice: 0 } }),
    prisma.productSize.create({ data: { productId: products[0].id, size: 'L', extraPrice: 10000 } }),
    prisma.productSize.create({ data: { productId: products[1].id, size: 'M', extraPrice: 0 } }),
    prisma.productSize.create({ data: { productId: products[2].id, size: 'L', extraPrice: 6000 } }),
    prisma.productSize.create({ data: { productId: products[3].id, size: 'L', extraPrice: 8000 } }),
  ]);

  // ==========================================
  // 5. PRODUCT TOPPINGS (5 records - Mapping)
  // ==========================================
  await Promise.all([
    // Cappuccino + Kem Cheese
    prisma.productTopping.create({ data: { productId: products[0].id, toppingId: toppings[3].id } }),
    // Americano + Thạch cà phê
    prisma.productTopping.create({ data: { productId: products[1].id, toppingId: toppings[2].id } }),
    // Cà phê sữa + Thạch cà phê
    prisma.productTopping.create({ data: { productId: products[2].id, toppingId: toppings[2].id } }),
    // Trà đào + Đào miếng thêm
    prisma.productTopping.create({ data: { productId: products[3].id, toppingId: toppings[4].id } }),
    // Trà sữa + Trân châu đen
    prisma.productTopping.create({ data: { productId: products[4].id, toppingId: toppings[0].id } }),
  ]);

  // ==========================================
  // 6. ORDERS (5 records)
  // ==========================================
  const orders = await Promise.all([
    prisma.order.create({
      data: {
        orderCode: 'ORD-2026-001',
        userId: users[0].id,
        status: OrderStatus.COMPLETED,
        subtotal: 57000,
        discountAmount: 0,
        totalAmount: 57000,
        note: 'Ít đá, giao trước sảnh',
      },
    }),
    prisma.order.create({
      data: {
        orderCode: 'ORD-2026-002',
        userId: users[1].id,
        status: OrderStatus.READY,
        subtotal: 42000,
        discountAmount: 2000,
        totalAmount: 40000,
        note: 'Không lấy ống hút nhựa',
      },
    }),
    prisma.order.create({
      data: {
        orderCode: 'ORD-2026-003',
        userId: users[2].id,
        status: OrderStatus.PREPARING,
        subtotal: 43000,
        discountAmount: 0,
        totalAmount: 43000,
        note: '70% đường',
      },
    }),
    prisma.order.create({
      data: {
        orderCode: 'ORD-2026-004',
        userId: users[3].id,
        status: OrderStatus.PAID,
        subtotal: 58000,
        discountAmount: 5000,
        totalAmount: 53000,
        note: 'Giao giờ hành chính',
      },
    }),
    prisma.order.create({
      data: {
        orderCode: 'ORD-2026-005',
        userId: users[4].id,
        status: OrderStatus.PENDING,
        subtotal: 50000,
        discountAmount: 0,
        totalAmount: 50000,
        note: 'Giao lên tầng 3',
      },
    }),
  ]);

  // ==========================================
  // 7. ORDER ITEMS (5 records)
  // ==========================================
  const orderItems = await Promise.all([
    // Item 1: Cappuccino size L (45k + 10k)
    prisma.orderItem.create({
      data: {
        orderId: orders[0].id,
        productId: products[0].id,
        productName: 'Cappuccino',
        size: 'L',
        basePrice: 45000,
        sizeExtraPrice: 10000,
        unitPrice: 55000,
        quantity: 1,
        subtotal: 55000,
      },
    }),
    // Item 2: Americano size M (35k)
    prisma.orderItem.create({
      data: {
        orderId: orders[1].id,
        productId: products[1].id,
        productName: 'Americano',
        size: 'M',
        basePrice: 35000,
        sizeExtraPrice: 0,
        unitPrice: 35000,
        quantity: 1,
        subtotal: 35000,
      },
    }),
    // Item 3: Cà phê sữa size L (30k + 6k)
    prisma.orderItem.create({
      data: {
        orderId: orders[2].id,
        productId: products[2].id,
        productName: 'Cà phê sữa',
        size: 'L',
        basePrice: 30000,
        sizeExtraPrice: 6000,
        unitPrice: 36000,
        quantity: 1,
        subtotal: 36000,
      },
    }),
    // Item 4: Trà đào size L (40k + 8k)
    prisma.orderItem.create({
      data: {
        orderId: orders[3].id,
        productId: products[3].id,
        productName: 'Trà đào',
        size: 'L',
        basePrice: 40000,
        sizeExtraPrice: 8000,
        unitPrice: 48000,
        quantity: 1,
        subtotal: 48000,
      },
    }),
    // Item 5: Trà sữa trân châu size M (42k)
    prisma.orderItem.create({
      data: {
        orderId: orders[4].id,
        productId: products[4].id,
        productName: 'Trà sữa trân châu',
        size: 'M',
        basePrice: 42000,
        sizeExtraPrice: 0,
        unitPrice: 42000,
        quantity: 1,
        subtotal: 42000,
      },
    }),
  ]);

  // ==========================================
  // 8. ORDER ITEM TOPPINGS (5 records)
  // ==========================================
  await Promise.all([
    // Cho Item 1: Thạch cà phê
    prisma.orderItemTopping.create({
      data: {
        orderItemId: orderItems[0].id,
        toppingId: toppings[2].id,
        toppingName: 'Thạch cà phê',
        toppingPrice: 7000,
      },
    }),
    // Cho Item 2: Thạch cà phê
    prisma.orderItemTopping.create({
      data: {
        orderItemId: orderItems[1].id,
        toppingId: toppings[2].id,
        toppingName: 'Thạch cà phê',
        toppingPrice: 7000,
      },
    }),
    // Cho Item 3: Thạch cà phê
    prisma.orderItemTopping.create({
      data: {
        orderItemId: orderItems[2].id,
        toppingId: toppings[2].id,
        toppingName: 'Thạch cà phê',
        toppingPrice: 7000,
      },
    }),
    // Cho Item 4: Đào miếng thêm
    prisma.orderItemTopping.create({
      data: {
        orderItemId: orderItems[3].id,
        toppingId: toppings[4].id,
        toppingName: 'Đào miếng thêm',
        toppingPrice: 10000,
      },
    }),
    // Cho Item 5: Trân châu đen
    prisma.orderItemTopping.create({
      data: {
        orderItemId: orderItems[4].id,
        toppingId: toppings[0].id,
        toppingName: 'Trân châu đen',
        toppingPrice: 8000,
      },
    }),
  ]);

  // ==========================================
  // 9. PAYMENTS (5 records)
  // ==========================================
  await Promise.all([
    prisma.payment.create({
      data: {
        orderId: orders[0].id,
        method: PaymentMethod.CARD,
        status: PaymentStatus.SUCCESS,
        amount: 57000,
        transactionCode: 'TXN_CARD_1001',
        paidAt: new Date().toISOString(),
      },
    }),
    prisma.payment.create({
      data: {
        orderId: orders[1].id,
        method: PaymentMethod.E_WALLET,
        status: PaymentStatus.SUCCESS,
        amount: 40000,
        transactionCode: 'TXN_MOMO_2002',
        paidAt: new Date().toISOString(),
      },
    }),
    prisma.payment.create({
      data: {
        orderId: orders[2].id,
        method: PaymentMethod.E_WALLET,
        status: PaymentStatus.PENDING,
        amount: 43000,
        transactionCode: 'TXN_ZALO_3003',
      },
    }),
    prisma.payment.create({
      data: {
        orderId: orders[3].id,
        method: PaymentMethod.CARD,
        status: PaymentStatus.SUCCESS,
        amount: 53000,
        transactionCode: 'TXN_VNPAY_4004',
        paidAt: new Date().toISOString(),
      },
    }),
    prisma.payment.create({
      data: {
        orderId: orders[4].id,
        method: PaymentMethod.E_WALLET,
        status: PaymentStatus.FAILED,
        amount: 50000,
        transactionCode: 'TXN_MOMO_5005',
        failureReason: 'Số dư ví không đủ để thanh toán',
      },
    }),
  ]);

  console.log('Seed thành công: Mỗi bảng đã có đủ đúng 5 bản ghi!');
}

main()
  .catch((e) => {
    console.error('Lỗi khi seed dữ liệu:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });