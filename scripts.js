/* ===============================
   PROJECT DATA (KEPT ORIGINAL)
================================ */
const projectsData = [
  {
    id: 1,
    category: "AI",
    title: "Website using AI in DICOM image",
    description: "Using AI in DICOM image. Deployed on web with Django framework.",
    image: "./images/ban3.gif",
    gallery: ["./images/ban3.gif"],
    technologies: ["Django", "DICOM", "U-Net"],
    github: "https://github.com/LarryVan-engin/AI_website_for_DICOM",
    demo: "https://github.com/LarryVan-engin/AI_website_for_DICOM/tree/main/website/appweb",
    report: "https://drive.google.com/file/d/1A2Li5Su2k26E1W4q3-dmbDf6HnVJ90cN/view?usp=drive_link",
    details: `
      <p>
        This project applies <strong>Deep Learning for medical image segmentation</strong> using the
        <strong>U-Net architecture</strong> to process DICOM (Digital Imaging and Communications in Medicine) files.
        The system automatically identifies and isolates specific brain regions to help doctors visualize anomalies
        such as tumors or lesions in MRI/CT scans.
      </p>
      <p>
        <img src="./images/free-DICOM-viewers.gif" alt="Original DICOM">
        <img src="./images/AIDICOM.jpg" alt="AI Mask Result">
      </p>
      <ul>
        <li>Preprocessing: anonymization, intensity normalization, and contrast enhancement.</li>
        <li>Model training with customized U-Net for precise tissue segmentation.</li>
        <li>Flask web interface for real-time visualization of AI segmentation masks.</li>
        <li>Achieved average <strong>IoU ≈ 0.89</strong> and built an open-source demo web app.</li>
      </ul>
      <p>
        <em>This research project contributes to advancing AI-assisted medical diagnostics,
        combining accuracy, interpretability, and practical use in healthcare.</em>
      </p>
    `
  },
  {
    id: 2,
    category: "AI",
    title: "Building an AI-based System for Traffic Violation Monitoring and Enforcement",
    description: "Detecting traffic violations using computer vision and deep learning.",
    image: "./images/image_copy.png",
    gallery: ["./images/Traffic.png", "https://github.com/user-attachments/assets/4bfb9764-5229-4b0a-98f1-8faa8c96d5a3", "https://github.com/user-attachments/assets/64fffa36-ec8f-4cdd-a7b5-05d30db54eb9", "https://github.com/user-attachments/assets/4b2e01b7-d763-4554-b018-1c244330a23e"],
    technologies: ["YOLOv12", "OpenCV", "Python", "EasyOCR", "DeepSort", "SORT", "Bytetrack", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/LarryVan-engin/DCLP",
    demo: "https://drive.google.com/file/d/1puoFPIU1uviGhUIa-fUw7IKpJwujN-NX/view?usp=drive_link",
    report: "https://drive.google.com/file/d/1uSaXFDV5333S2FOZZ4cQ2px_9pr5GNF-/view?usp=drive_link",
    details: `
      <p>
        Hệ thống <strong>AI Traffic Monitor System</strong> được thiết kế theo mô hình client-server thời gian thực, ứng dụng các mô hình học sâu tiên tiến (YOLOv12) và thuật toán tracking (ByteTrack) để tự động giám sát, phát hiện phương tiện và các hành vi vi phạm luật giao thông.
      </p>

      <h3 style="margin-top: 20px; margin-bottom: 15px; color: var(--accent-color);">1. Kiến trúc Hệ thống (Architecture)</h3>
      <p>Hệ thống được chia làm 3 lớp chính hoạt động đồng bộ:</p>
      <ul>
        <li><strong>Frontend (UI + Konva + WebSocket):</strong> Giao diện giám sát trực quan, hiển thị video qua luồng MJPEG. Cho phép người dùng vẽ ROI (Region of Interest) động như vạch phạt (line), vùng cấm (polygon) trực tiếp lên màn hình.</li>
        <li><strong>Backend (FastAPI):</strong> Xử lý luồng stream, quản lý trạng thái hệ thống, và truyền phát dữ liệu (xe, vi phạm, thống kê) qua WebSocket với độ trễ cực thấp.</li>
        <li><strong>AI Pipeline:</strong> Xử lý nhận diện và theo dõi đối tượng. Tách biệt rõ ràng luồng Vehicle Tracking, Traffic Light Detection, và Plate Detection & OCR.</li>
      </ul>

      <h3 style="margin-top: 20px; margin-bottom: 15px; color: var(--accent-color);">2. Luồng xử lý AI & OCR</h3>
      <div class="mermaid" style="background: transparent; display: flex; justify-content: center; margin: 20px 0;">
flowchart TD
    classDef default fill:#1e1e1e,stroke:#00ffcc,stroke-width:1px,color:#d4d4d4,rx:5px,ry:5px;
    classDef highlight fill:#2d2d2d,stroke:#00ffcc,stroke-width:2px,color:#fff;
    
    VD["<div style='text-align:left'><b>Vehicle Detection</b><br/>YOLOv12 + ByteTrack</div>"]:::highlight
    TL["<div style='text-align:left'><b>Traffic Light Detection</b><br/>YOLOv12 (chu kỳ 3 frames)</div>"]
    PL["<div style='text-align:left'><b>Plate Detection</b><br/>YOLOv12 (chu kỳ 5 frames)</div>"]
    OCR["<div style='text-align:left'><b>EasyOCR</b><br/>Nhận dạng biển số</div>"]:::highlight
    VIO{"Luật Vi Phạm<br/>(Vượt đèn đỏ / Vùng cấm)"}
    DB[("Database<br/>(SQLite)")]
    
    VD --> VIO
    TL --> VIO
    VD --> PL
    PL --> OCR
    OCR --> DB
    VIO --> DB
      </div>
      <h3 style="margin-top: 20px; margin-bottom: 15px; color: var(--accent-color);">3. Hiệu năng & Tối ưu hóa (Performance)</h3>
      <div style="display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
          <div style="flex: 1; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; min-width: 200px; border-left: 4px solid var(--accent-color);">
              <p style="margin: 0; font-size: 14px; color: #aaa;">Độ chính xác (mAP@0.5)</p>
              <p style="margin: 5px 0 0; font-size: 16px; font-weight: bold; color: #fff;">Đèn GT: 99.2% | Xe: 97.5%</p>
          </div>
          <div style="flex: 1; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; min-width: 200px; border-left: 4px solid var(--accent-color);">
              <p style="margin: 0; font-size: 14px; color: #aaa;">Tốc độ trên Edge Kit</p>
              <p style="margin: 5px 0 0; font-size: 24px; font-weight: bold; color: #fff;">~ 35.1 FPS</p>
          </div>
          <div style="flex: 1; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; min-width: 200px; border-left: 4px solid var(--accent-color);">
              <p style="margin: 0; font-size: 14px; color: #aaa;">Thời gian suy luận (Frame vs Crop)</p>
              <p style="margin: 5px 0 0; font-size: 16px; font-weight: bold; color: #fff;">Giảm từ 32.1ms xuống 28.5ms</p>
          </div>
      </div>
      <p>Bằng việc chuyển từ <strong>suy luận trên toàn khung hình</strong> sang <strong>suy luận trên các vùng ảnh được cắt (Crop)</strong> (chỉ crop mặt đường cho xe, crop góc cao cho đèn), hệ thống đã tiết kiệm được thời gian tính toán và tăng tốc độ lên 1.13 lần (đạt 35.1 FPS trên phần cứng Edge) mà không đánh đổi độ chính xác.</p>
      
      <h3 style="margin-top: 20px; margin-bottom: 15px; color: var(--accent-color);">4. Phương pháp Kiểm thử & Giải thuật Chuyên sâu</h3>
      
      <details style="background: rgba(0,0,0,0.2); padding: 10px 15px; border-radius: 8px; margin-bottom: 10px; cursor: pointer; border: 1px solid rgba(255,255,255,0.05);">
        <summary style="font-weight: bold; color: #00ffcc; outline: none;">Xử lý Vi phạm (Line Crossing & Forbidden Zone)</summary>
        <div style="padding-top: 10px;">
            <p>Hệ thống bắt lỗi thông qua 2 cơ chế chính:</p>
            <ul>
                <li><strong>Cán vạch (Line Crossing):</strong> Kiểm tra giao cắt giữa quỹ đạo của phương tiện (từ <code>prev_center</code> đến <code>curr_center</code>) với đường ROI "vạch phạt". Áp dụng cooldown 2.0s để tránh phạt lặp.</li>
                <li><strong>Vào vùng cấm (Forbidden Zone):</strong> Ứng dụng giải thuật Point-in-Polygon. Bắt lỗi theo "edge-trigger" (chỉ ghi nhận khi vừa chuyển trạng thái từ ngoài vào trong vùng cấm).</li>
            </ul>
            <p>Qua đánh giá (như hình bên dưới), nhóm đã chọn <strong>tâm của bounding box</strong> làm điểm đại diện phương tiện. So với điểm cạnh trên hoặc dưới, tâm bbox phản ánh đúng nhất vị trí thực tế của xe do góc nhìn từ trên cao của camera an ninh.</p>
            <p style="text-align: center;"><img src="https://github.com/user-attachments/assets/4b2e01b7-d763-4554-b018-1c244330a23e" alt="Bounding Box center analysis" style="max-width: 100%; border-radius: 5px;"></p>
        </div>
      </details>

      <details style="background: rgba(0,0,0,0.2); padding: 10px 15px; border-radius: 8px; margin-bottom: 10px; cursor: pointer; border: 1px solid rgba(255,255,255,0.05);">
        <summary style="font-weight: bold; color: #00ffcc; outline: none;">Vạch dừng ảo & Phân làn Data-driven</summary>
        <div style="padding-top: 10px;">
            <p>Để linh hoạt với các đoạn đường vạch kẻ mờ, hệ thống dùng <strong>vạch dừng ảo</strong> (đoạn thẳng cạnh trên của vùng ROI hình thang) thay vì nhận diện vạch đường vật lý.</p>
            <p>Thuật toán <strong>phân làn data-driven</strong> học cấu trúc làn trực tiếp từ phân bố luồng xe thực tế theo thời gian. Tính năng này đóng vai trò quyết định giúp phát hiện lỗi sai làn, đồng thời hạn chế các cảnh báo sai (false positives).</p>
            <p style="text-align: center;"><img src="https://github.com/user-attachments/assets/8d154b3a-f5e2-433d-89e4-9b1bff37070a" alt="ROI Line" style="max-width: 100%; border-radius: 5px; margin-top: 10px;"></p>
        </div>
      </details>

      <details style="background: rgba(0,0,0,0.2); padding: 10px 15px; border-radius: 8px; margin-bottom: 10px; cursor: pointer; border: 1px solid rgba(255,255,255,0.05);">
        <summary style="font-weight: bold; color: #00ffcc; outline: none;">Luồng Plate Detection & Tối ưu OCR</summary>
        <div style="padding-top: 10px;">
            <p>Khi phát hiện vi phạm tại Edge Node, hệ thống chỉ trích xuất và gửi ảnh phương tiện vi phạm (mã hóa Base64 qua MQTT) về Server, giảm thiểu gánh nặng băng thông.</p>
            <p>Tại Server Node, ảnh đi qua pipeline tiền xử lý OCR cực kỳ chặt chẽ:</p>
            <ul>
                <li>Mở rộng bounding box, đổi ảnh sang Grayscale, áp dụng Adaptive Thresholding và đảo màu nhằm giảm nhiễu.</li>
                <li>Tự động nhận biết <strong>Biển số 1 dòng</strong> và <strong>Biển số 2 dòng</strong> dựa trên tỷ lệ chiều rộng/cao. Biển 2 dòng sẽ được cắt đôi và OCR tuần tự trên từng dòng.</li>
                <li><strong>Sửa lỗi theo ngữ cảnh (Contextual Correction):</strong> Ánh xạ các ký tự dễ nhầm lẫn dựa vào định dạng biển số VN (ví dụ: chữ 'O' thành số '0' ở đuôi, số '5' thành chữ 'S' ở cụm seri).</li>
            </ul>
            <p style="text-align: center;"><img src="https://github.com/user-attachments/assets/4bfb9764-5229-4b0a-98f1-8faa8c96d5a3" alt="OCR Pipeline" style="max-width: 100%; border-radius: 5px; margin-top: 10px;"></p>
        </div>
      </details>

      <h3 style="margin-top: 20px; margin-bottom: 15px; color: var(--accent-color);">5. Đồng bộ WebSocket & Kết xuất Dữ liệu</h3>
      <p>Sau khi vi phạm được chốt biển số, dữ liệu được Server đẩy tức thời về Dashboard thông qua kết nối <strong>WebSocket</strong>. Giao diện hiển thị realtime loại lỗi, thông tin chủ xe, thời điểm và ảnh bằng chứng. Cuối cùng, người vận hành có thể truy xuất xuất báo cáo dưới dạng CSV / Excel trực tiếp từ cơ sở dữ liệu MongoDB Atlas.</p>
      
      <p style="text-align: center; margin-top: 15px;">
        <img src="https://github.com/user-attachments/assets/64fffa36-ec8f-4cdd-a7b5-05d30db54eb9" alt="Violation Details" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
      </p>
    `
  },
  {
    id: 3,
    category: "IoT",
    title: "Smart Warehouse System IoT",
    description: "A project to build a smart warehouse system with Raspberry Pi.",
    image: "./images/IoT.png",
    gallery: ["./images/IoT.png"],
    technologies: ["React", "Node.js", "MongoDB", "Raspberry Pi", "IoT", "Sensors", "MQTT", "Docker"],
    github: "https://github.com/LarryVan-engin/Project_IoT_WareHouse-main",
    demo: "https://github.com/LarryVan-engin/Project_IoT_WareHouse-main/blob/main/README.md",
    report: "https://drive.google.com/file/d/1qD7J3B2dnhKzwaELuDF2ocNncC20PtLb/view?usp=drive_link",
    details: `
      <p>
        A complete <strong>IoT-based warehouse management system</strong> designed for real-time monitoring
        and environmental control. Sensors track temperature, humidity, and light, while RFID modules
        handle goods and staff identification.
      </p>
      <p>
        <img src="./images/Warehouse-empty-animation.gif" alt="IoT Dashboard">
        <img src="./images/Diagram_2.png" alt="Sensors Network">
      </p>
      <ul>
        <li>Real-time monitoring dashboard built with MQTT and WebSocket.</li>
        <li>RFID-based authentication and access control for goods and personnel.</li>
        <li>Automatic alerts when environmental thresholds are exceeded.</li>
        <li>Remote control for devices (fans, lights, alarms) via dashboard.</li>
        <li>Expandable architecture for cloud or large-scale logistics integration.</li>
      </ul>
      <p>
      <img src="https://github.com/user-attachments/assets/20302b7f-14b4-4394-9c93-14b82d467424" alt="Team Image">
      </p>
      <p>
        <em>Developed as a scalable IoT ecosystem enabling efficient, intelligent warehouse automation.</em>
      </p>
    `
  },
  {
    id: 4,
    category: "Web",
    title: "Portfolio",
    description: "Personal portfolio version 1.5",
    image: "./images/Portfolio.png",
    gallery: ["./images/Portfolio.png","./images/contactpanel.png"],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/LarryVan-engin/PortFolio",
    demo: "https://drive.google.com/file/d/15eFYCMM8xTv9SXEDkOce881xpSOFK2B2/view?usp=drive_link",
    report: "",
    details: `
      <p>
        The initial version of my personal portfolio, built purely with <strong>HTML, CSS, and JavaScript</strong>.
        This version focused on clarity, responsive design, and creative presentation.
        It laid the groundwork for the current <strong>Glassmorphism</strong> aesthetic and modern architecture.
      </p>
      <ul>
        <li>Fully responsive static design for all screen sizes.</li>
        <li>Lightweight animations and scroll effects.</li>
        <li>Optimized SEO and accessibility structure.</li>
      </ul>
      <p>
        The design emphasized simplicity and user experience, setting the stage for future enhancements.
        Its also contains the contact form version 1 using EmailJS service.
      </p>
      <p>
        <img src="./images/contactpanel.png" alt="Contact Section">
        <img src="https://github.com/user-attachments/assets/ae53c75e-1312-4697-b3a9-b61698d0fdf2" alt="EmailJS Management">
      </p>
      <p>
        <em>Version 1 served as the cornerstone for evolving my web design philosophy — blending creativity and performance.</em>
        Click Live demo to see my CV and project showcase in my first portfolio version.
      </p>
    `
  },
    {
    id: 5,
    category: "SMTP",
    title: "CHICOM SMTP Server",
    description: "Website for user management and UI for commerce.",
    image: "https://github.com/user-attachments/assets/cc8cdc69-a7a1-45ec-a99f-684e2950e628",
    gallery: ["https://github.com/user-attachments/assets/cc8cdc69-a7a1-45ec-a99f-684e2950e628","https://github.com/user-attachments/assets/da71f60e-34a7-4c35-82a2-0980483a6c5e",],
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SMTP"],
    github: "https://github.com/LarryVan-engin/IOE/tree/main/CHICOM",
    demo: "https://github.com/LarryVan-engin/IOE/blob/main/CHICOM/2025-10-20%2020-09-54.mp4",
    report: "",
    details: `
      <p>
        <strong>HỆ THỐNG WEB — USER / ADMIN MANAGEMENT & PAYMENT FLOW</strong>
      </p>
      <ul style="list-style-type: none; padding-left: 0;">
        
        <li style="margin-bottom: 20px;">
            <h3>⚙️ 1. CẤU TRÚC THƯ MỤC DỰ ÁN</h3>
            <p><strong>📁 back_end/</strong> (Node.js + Express + MongoDB + Email SMTP)</p>
            <pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 0.9em;">
              back_end/
              │
              ├── .env                  # Biến môi trường (DB, JWT, SMTP)
              ├── index.js              # File chính khởi động server
              ├── test_mail.js          # Script kiểm tra gửi mail SMTP
              │
              ├── admin_model/          # Controllers logic
              │   ├── authController.js       # Auth logic
              │   ├── middlewareController.js # JWT & Admin check
              │   └── userController.js       # CRUD user
              │
              ├── routes/               # API Endpoints
              │   ├── auth.js           # /v1/auth
              │   ├── user.js           # /v1/user
              │   ├── order.js          # /v1/order
              │
              ├── user_model/ & models/ # Mongoose Schemas (User, Order)
              └── utils/mailer.js       # Nodemailer config
            </pre>
            <p><strong>🌐 front_end/</strong> (HTML + JS thuần)</p>
            <pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 0.9em;">
              front_end/
              │
              ├── admin.html            # Dashboard Admin
              ├── user_management.html  # Quản lý user
              ├── payment_management.html # Quản lý đơn hàng
              ├── user_dashboard.html   # Dashboard User
              ├── payment.html          # Trang thanh toán
              ├── login.html / register.html
              └── js/auth.js            # Xử lý Logic Client
            </pre>
        </li>

        <li style="margin-bottom: 20px;">
            <h3>2. WORKFLOW — LUỒNG HOẠT ĐỘNG</h3>
            <p>Hệ thống hoạt động theo cơ chế xác thực chặt chẽ qua Email:</p>
            <ul>
                <li><strong>Đăng ký:</strong> User đăng ký -> Server lưu "pending" -> Gửi mail báo Admin.</li>
                <li><strong>Duyệt User:</strong> Admin vào trang quản lý -> Accept -> User nhận mail "Active" -> Mới được đăng nhập.</li>
                <li><strong>Thanh toán:</strong> User mua hàng -> Xác nhận thanh toán -> Admin nhận mail -> Admin duyệt đơn -> User nhận OTP.</li>
            </ul>
        </li>

        <li style="margin-bottom: 20px;">
            <h3>🔑 3. CẤU HÌNH (.ENV)</h3>
            <p>Sử dụng App Password của Google cho SMTP:</p>
            <pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 0.9em;">
              MONGODB_URL=mongodb+srv://...
              SECRETKEY=your_jwt_secret
              SMTP_HOST=smtp.gmail.com
              SMTP_PORT=465
              SMTP_USER=Sender@gmail.com
              SMTP_PASS=ddfmvevxiqelivva  <-- (App Password 16 ký tự)
              ADMIN_EMAIL=admin@hcmut.edu.vn
            </pre>
        </li>

        <li style="margin-bottom: 30px;">
            <h3>GIAO DIỆN & TEST CASE</h3>
            
            <p><strong>1. Đăng nhập & Đăng ký:</strong></p>
            <p>Giao diện Login:</p>
            <img src="https://github.com/user-attachments/assets/f25143fe-f5c1-4afe-881e-0eebd0d9730d" alt="Login Screen" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            
            <p>Giao diện Đăng ký (Validate dữ liệu chặt chẽ):</p>
            <img src="https://github.com/user-attachments/assets/39d0e389-438c-4f91-b418-6d8ab628a983" alt="Register Screen" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            
            <p>Thông báo đăng ký thành công:</p>
            <img src="https://github.com/user-attachments/assets/34e5c40d-365d-4d72-ba1f-f24b0bb93241" alt="Success Register" style="width: 100%; max-width: 400px; height: auto; border-radius: 8px; margin-bottom: 10px;">

            <p><strong>2. Cơ chế duyệt User:</strong></p>
            <p>Khi chưa được Admin duyệt, User không thể đăng nhập:</p>
            <img src="https://github.com/user-attachments/assets/e7498e59-9977-4255-9bf0-0c2aafc09f9f" alt="Login Failed Pending" style="width: 100%; max-width: 500px; height: auto; border-radius: 8px; margin-bottom: 10px;">
            
            <p>Email thông báo gửi về Admin:</p>
            <img src="https://github.com/user-attachments/assets/b199a4ca-ba34-4a62-a97a-9096af0f0bd0" alt="Email to Admin" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">

            <p><strong>3. Admin Dashboard:</strong></p>
            <p>Admin quản lý danh sách User (Approve/Reject):</p>
            <img src="https://github.com/user-attachments/assets/4195ae0f-d6f0-4393-acac-480cf47e13b0" alt="Admin User Management" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
            
            <p><strong>4. Luồng thanh toán (Payment Flow):</strong></p>
            <p>User thực hiện thanh toán và xác nhận:</p>
            <img src="https://github.com/user-attachments/assets/23f8f3fa-5917-4d46-9314-f1bbeceef66e" alt="User Payment" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
            
            <p>Admin nhận Email có đơn hàng mới:</p>
            <img src="https://github.com/user-attachments/assets/26530641-deae-4495-bdfd-c32a332f47b1" alt="Email Order" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
            
            <p>Admin xác nhận đơn hàng trên hệ thống:</p>
            <img src="https://github.com/user-attachments/assets/c68f0442-17df-482e-8023-6c4771cd78c0" alt="Admin Approve Order" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
            
            <p>User nhận được Email kèm mã OTP xác thực:</p>
            <img src="https://github.com/user-attachments/assets/b5f09253-f3c2-42ec-a5cc-5257717b54a6" alt="OTP Email" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
        </li>

      </ul>
      <p>
        <em>Version 1 served as the cornerstone for evolving my web design philosophy — blending creativity and performance.</em>
      </p>
    `
  },
  {
    id: 6,
    category: "AI",
    title: "Edge-AI IAQ Monitoring & Prediction",
    description: "An Edge-AI system for indoor air quality (IAQ) monitoring and prediction using the Renesas CK-RA6M5 kit.",
    image: "images/image.png",
    gallery: [],
    technologies: ["CK-RA6M5", "ZMOD4410", "TensorFlow Lite", "Azure RTOS", "MQTT"],
    github: "",
    demo: "",
    report: "",
    details: `
      <p>
        <strong>EDGE-AI DRIVEN INDOOR AIR QUALITY (IAQ) MONITORING & PREDICTION SYSTEM</strong>
      </p>
      <p>
        Dự án tập trung giải quyết hạn chế của các hệ thống giám sát không khí truyền thống bằng cách đưa khả năng dự báo lên thiết bị biên (Edge AI). 
        Hệ thống sử dụng vi điều khiển <strong>Renesas CK-RA6M5 (Arm Cortex®-M33)</strong> và cảm biến <strong>ZMOD4410</strong> để liên tục thu thập nồng độ eCO2 và TVOC, 
        từ đó chạy suy luận mô hình học sâu (MLP) trực tiếp trên phần cứng để dự báo chỉ số AQI trong tương lai gần.
      </p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="margin-bottom: 20px;">
            <h3> 1. Edge Computing & Real-Time Operating System (RTOS)</h3>
            <p>Mô hình Multi-Layer Perceptron (MLP) được tối ưu hóa bằng <strong>TensorFlow Lite for Microcontrollers</strong>, mang lại khả năng suy luận tức thời với mức tiêu thụ năng lượng cực thấp và bảo vệ quyền riêng tư người dùng. Hệ điều hành <strong>Azure RTOS</strong> được ứng dụng để quản lý tài nguyên và điều phối đa nhiệm mượt mà giữa việc đọc cảm biến, tính toán AI và truyền tải dữ liệu.</p>
            
            <p style="margin-top: 15px; margin-bottom: 10px; font-weight: bold; color: var(--accent-color);">Hình: Lưu đồ giải thuật tổng quát</p>
            <img alt="Lưu đồ giải thuật tổng quát" src="https://github.com/user-attachments/assets/8c2dc855-f821-4e69-b813-be40b8d7a36e" style="width: 100%; max-width: 600px; height: auto; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); display: block; margin: 0 auto 15px;" />
        </li>
        <li style="margin-bottom: 20px;">
            <h3> 2. MLOps Pipeline & Incremental Learning (OTA)</h3>
            <p>Hệ thống được thiết kế với tư duy MLOps tiên tiến. Dựa trên dữ liệu thu thập được, Server sẽ tự động kích hoạt tiến trình huấn luyện tăng cường (Incremental Learning) nhằm hiệu chỉnh mô hình phù hợp với đặc thù riêng biệt của từng môi trường thực tế (vd: mật độ người, hóa chất nội thất). Trọng số (weights) tối ưu sẽ được cập nhật liên tục xuống thiết bị biên thông qua <strong>Firmware Over-The-Air (OTA)</strong> qua kết nối WiFi, giúp sai số dự đoán (MAE) ngày càng được giảm thiểu.</p>

            <p style="margin-top: 15px; margin-bottom: 10px; font-weight: bold; color: var(--accent-color);">Hình: Lưu đồ AI Inference</p>
            <img alt="Lưu đồ AI Inference" src="https://github.com/user-attachments/assets/ac05e024-54ab-4d7b-b121-e5c930a8790d" style="width: 100%; max-width: 600px; height: auto; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); display: block; margin: 0 auto 15px;" />
        </li>
        <li style="margin-bottom: 30px;">
            <h3> 3. IoT Backend Infrastructure & Visualization</h3>
            <p>Kiến trúc truyền tải dữ liệu được thiết kế chặt chẽ và mở rộng: thiết bị gửi dữ liệu viễn trắc (telemetry) đến hệ thống phân phối tin nhắn <strong>MQTT Broker</strong> thông qua module ESP32. Phía Backend sử dụng <strong>FastAPI</strong> kết hợp <strong>SQLite</strong> để lưu trữ lịch sử, và trực quan hóa cảnh báo cùng các biểu đồ biến thiên chất lượng không khí theo thời gian thực (Real-time) trên giao diện <strong>Streamlit Dashboard</strong>.</p>
        </li>
        
        <div style="margin-bottom: 30px;">
            <h3 style="margin-bottom: 15px;"> 4. Lưu đồ quá trình xử lý dữ liệu</h3>
            <div class="mermaid" style="background: transparent; display: flex; justify-content: center; margin: 20px 0;">
flowchart TD
    classDef default fill:#1e1e1e,stroke:#00ffcc,stroke-width:1px,color:#d4d4d4,rx:5px,ry:5px;
    classDef highlight fill:#2d2d2d,stroke:#00ffcc,stroke-width:2px,color:#fff;
    
    ESP["<div style='text-align:left'><b>ESP32 gửi dữ liệu MQTT</b><br/>[547034 ms] Published: TVOC=144.0ppb | Actual=1.86 | Predict=1.80<br/>[548171 ms] [sensor:263] T=31.1 C  RH=46.9%</div>"]:::highlight
    
    MQTT["<div style='text-align:left'><b>MQTT Client</b> (backend/mqtt_client.py)<br/>• Subscribe: iaq/node/data<br/>• Parse với Regex Patterns<br/>• Validate: đủ TVOC, Actual, Predict?<br/>• Cache: latest temperature/humidity</div>"]
    
    DB["<div style='text-align:left'><b>Database Manager</b> (backend/database_manager.py)<br/>• Save to SQLite: air_quality_logs<br/>• Auto migration (thêm columns nếu cần)<br/>• Count samples (check trigger retrain at 500)</div>"]
    
    ESP --> MQTT
    MQTT -->|Dữ liệu hợp lệ| DB
    
    subgraph Processing [Trigger Checks & Processing]
        direction LR
        TRG{"Check Retrain<br/>(500 samples?)"}
        API["<div style='text-align:left'><b>API Handler</b><br/>/api/v1/latest</div>"]
        FRONT["<div style='text-align:left'><b>Frontend Update</b><br/>(Streamlit refresh)<br/>Dashboard shows Metrics</div>"]
    end
    
    DB --> TRG
    DB --> API
    DB --> FRONT
    
    AI["<div style='text-align:left'><b>AI Engine Retraining</b> (ai_engine/retraining_script.py)<br/>• Extract data from database<br/>• Normalize: StandardScaler<br/>• Fine-tune: Epochs=15, LR=0.0001<br/>• Export: TFLite + C-Header (updates/)<br/>• Ready for OTA update to MCU</div>"]:::highlight
    
    TRG -->|YES| AI
            </div>
        </div>

        <div style="margin-bottom: 30px;">
            <h3 style="margin-bottom: 15px;"> 5. Cách thức đo đạc, thử nghiệm</h3>
            <ul style="list-style-type: none; padding: 0;">
                <li style="margin-bottom: 10px; padding-left: 20px; position: relative;"><span style="position: absolute; left: 0; color: var(--accent-color);">➤</span> Sử dụng <strong>Visual Studio Code</strong> để lập trình nhúng (Code C) vào Kit và theo dõi thời gian suy luận (Inference Time).</li>
                <li style="margin-bottom: 10px; padding-left: 20px; position: relative;"><span style="position: absolute; left: 0; color: var(--accent-color);">➤</span> Thiết kế Dashboard, Broker với <strong>Mosquitto</strong> để xử lý dữ liệu qua giao thức MQTT để hiển thị tổng quát các giá trị được gửi từ Edge đến Server, nhằm theo dõi và tính toán, ước tính, đánh giá các thông số của mô hình.</li>
                <li style="margin-bottom: 10px; padding-left: 20px; position: relative;"><span style="position: absolute; left: 0; color: var(--accent-color);">➤</span> Sử dụng <strong>Kaggle Notebook</strong> và ngôn ngữ <strong>Python</strong> để huấn luyện framework TensorFlow.</li>
                <li style="margin-bottom: 10px; padding-left: 20px; position: relative;"><span style="position: absolute; left: 0; color: var(--accent-color);">➤</span> Convert sang định dạng <strong>Lite</strong>, chuyển đổi định dạng Header và kiểm tra sai số MAE trước khi nạp xuống Kit.</li>
            </ul>
        </div>

        <div style="margin-bottom: 30px;">
            <h3 style="margin-bottom: 15px;"> 6. Số liệu đo đạc & Hiệu năng hệ thống</h3>
            <div style="display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
                <div style="flex: 1; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; min-width: 200px; border-left: 4px solid var(--accent-color);">
                    <p style="margin: 0; font-size: 14px; color: #aaa;">Sai số mô hình (MAE)</p>
                    <p style="margin: 5px 0 0; font-size: 24px; font-weight: bold; color: #fff;">&lt; 0.075</p>
                </div>
                <div style="flex: 1; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; min-width: 200px; border-left: 4px solid var(--accent-color);">
                    <p style="margin: 0; font-size: 14px; color: #aaa;">Inference Time (RA6M5)</p>
                    <p style="margin: 5px 0 0; font-size: 24px; font-weight: bold; color: #fff;">~ 50 ms</p>
                </div>
            </div>

            <h5 style="margin-bottom: 10px; color: var(--accent-color);">Bảng 1. Thông số hệ thống</h5>
            <div style="overflow-x: auto; margin-bottom: 20px;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; background: rgba(0, 0, 0, 0.2); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    <thead>
                        <tr style="background: rgba(255, 255, 255, 0.1);">
                            <th style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">Chỉ số</th>
                            <th style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">RAM Usage</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #00ffcc;">~120 KB</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Flash Usage</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #00ffcc;">~350 KB</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px;">Độ trễ truyền WiFi</td>
                            <td style="padding: 12px 15px; color: #00ffcc;">&lt; 500 ms</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5 style="margin-bottom: 10px; color: var(--accent-color);">Bảng 2. Đánh giá hiệu năng hệ thống</h5>
            <div style="overflow-x: auto; margin-bottom: 20px;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; background: rgba(0, 0, 0, 0.2); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    <thead>
                        <tr style="background: rgba(255, 255, 255, 0.1);">
                            <th style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">Metric</th>
                            <th style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">Value</th>
                            <th style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">MQTT Parse Time</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #00ffcc;">~1ms</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Regex patterns</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Database Insert</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #00ffcc;">~5ms</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">SQLite</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">API Response</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #00ffcc;">&lt;100ms</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Simple queries</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Dashboard Refresh</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #00ffcc;">3s</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Streamlit polling</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Model Inference</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #00ffcc;">~50ms</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">TFLite on RA6M5</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px;">Retrain Trigger</td>
                            <td style="padding: 12px 15px; color: #00ffcc;">Every 500 samples</td>
                            <td style="padding: 12px 15px;">~25 minutes</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5 style="margin-bottom: 10px; color: var(--accent-color);">Bảng 3. IAQ UBA Rating Levels on Dashboard</h5>
            <div style="overflow-x: auto; margin-bottom: 20px;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; background: rgba(0, 0, 0, 0.2); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    <thead>
                        <tr style="background: rgba(255, 255, 255, 0.1);">
                            <th style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">Level</th>
                            <th style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">Range</th>
                            <th style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">Color</th>
                            <th style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">1</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">1.0 - 1.9</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #4CAF50;">🟢 Green</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Very Good</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">2</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">1.9 - 2.9</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #8BC34A;">🟡 Yellow-Green</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Good</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">3</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">2.9 - 3.9</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #FFEB3B;">🟡 Yellow</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Fair</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">4</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">3.9 - 4.9</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #FF9800;">🟠 Orange</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Poor</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px;">5</td>
                            <td style="padding: 12px 15px;">4.9 - 5.0</td>
                            <td style="padding: 12px 15px; color: #F44336;">🔴 Red</td>
                            <td style="padding: 12px 15px;">Very Poor</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5 style="margin-bottom: 15px;">Hình 8. Sơ đồ biến đổi LOSS và MAE</h5>
            <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 8px; border-left: 4px solid var(--accent-color); position: relative;">
                <p style="margin: 0; font-style: italic; line-height: 1.6;">
                    <strong style="color: var(--accent-color);">Đánh giá chung:</strong> Khi đường Train Loss và Validation Loss cùng giảm dần đến một ngưỡng nhất định rồi bắt đầu đi ngang (flatten out) thì chứng tỏ một dấu hiệu tích cực trong quá trình training model. Trong Machine Learning, đây là hiện tượng <strong>Sự hội tụ (Convergence)</strong>. Với mô hình IAQ, chỉ số MAE giảm đến mức thấp nhất là khoảng 0.25 và không giảm về 0 bởi vì mô hình AI dự đoán lúc nào cũng có sai số, không hoàn toàn chính xác tuyệt đối.
                </p>
            </div>
        </div>
      </ul>
      <p>
        <em>Dự án là minh chứng rõ nét cho năng lực làm chủ và tích hợp trọn vẹn toàn bộ chu trình phát triển hệ thống nhúng thông minh: từ kiến trúc phần cứng vi điều khiển Arm, lập trình hệ điều hành RTOS, xây dựng luồng dữ liệu IoT (Backend/Frontend), cho đến việc thiết kế và triển khai mô hình Edge AI ứng dụng thực tiễn.</em>
      </p>
    `
  }
];

// Hiệu ứng fade từng dòng About
const about = document.querySelector('.about-text');
if (about) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) about.classList.add('visible');
    });
  }, { threshold: 0.3 });
  observer.observe(about);
}

/* ===============================
   RENDER PROJECTS
================================ */
function renderProjects(filtered = "all") {
  const grid = document.getElementById("portfolio-grid");
  grid.innerHTML = "";

  const list = filtered === "all" ? projectsData : projectsData.filter(p => p.category === filtered);
  list.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.id = project.id;
    card.innerHTML = `
      <img src="${project.image}" class="project-image" loading="lazy"/>
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
      </div>`;
    grid.appendChild(card);
  });

  attachCardClicks();
}

/* ===============================
   MODAL DETAILS
================================ */
function attachCardClicks() {
  const cards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImg = document.getElementById("modal-image");
  const modalDesc = document.getElementById("modal-desc");
  const modalGallery = document.getElementById("modal-gallery");
  const modalGitHub = document.getElementById("modal-github");
  const modalDemo = document.getElementById("modal-demo");
  const modalReport = document.getElementById("modal-report");
  const closeBtn = document.querySelector(".close-btn");

  cards.forEach(card => {
    card.addEventListener("mousemove", e => tiltCard(e, card));
    card.addEventListener("mouseleave", () => resetTilt(card));

    card.addEventListener("click", () => {
      const project = projectsData.find(p => p.id == card.dataset.id);
      if (!project) return;

      modalTitle.textContent = project.title;
      modalImg.src = project.image;
      modalDesc.innerHTML = project.details;
      
      // Trigger Mermaid render for dynamic content
      setTimeout(() => {
        if (window.mermaid) {
          try {
            mermaid.init(undefined, modalDesc.querySelectorAll('.mermaid'));
          } catch (e) {
            console.error('Mermaid error:', e);
          }
        }
      }, 50);

      modalGallery.innerHTML = "";
      project.gallery.forEach(img => {
        const thumb = document.createElement("img");
        thumb.src = img;
        thumb.loading = "lazy";
        thumb.addEventListener("click", () => (modalImg.src = img));
        modalGallery.appendChild(thumb);
      });

      modalGitHub.href = project.github;
      modalDemo.href = project.demo;

      if (project.report) {
        modalReport.href = project.report;
        modalReport.style.display = "inline-block";
      } else {
        modalReport.style.display = "none";
      }

      modal.classList.add("active");
      document.body.classList.add("modal-open");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  });
}

/* ===============================
   Typing Effect for Header
================================ */
function initTypingEffect() {
  const typingElement = document.getElementById("typing");
  if (!typingElement) return;

  const texts = ["AI Engineer", "IoT Developer", "Edge AI Developer", "Tech Enthusiast"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100; 
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ===============================
   3D TILT EFFECT
================================ */
function tiltCard(e, card) {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / 20).toFixed(2);
  const rotateY = ((x - centerX) / 20).toFixed(2);
  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
}
function resetTilt(card) {
  card.style.transform = "rotateX(0) rotateY(0) scale(1)";
}

/* ===============================
   FILTER BUTTONS
================================ */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

/* ===============================
   THEME TOGGLE
================================ */
function initThemeToggle() {
  const btn = document.getElementById("theme-toggle-btn");
  const icon = document.getElementById("theme-icon");
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark-mode");
    icon.textContent = "☀️";
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    icon.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

/* ===============================
   CHAT BUTTON
================================ */

document.getElementById("chat-btn").addEventListener("click", () => {
  const choice = confirm("💬 Message via Telegram (OK) or Discord (Cancel)?");
  if (choice)
    window.open("https://t.me/YourTelegramUsername", "_blank");
  else
    window.open("https://discord.gg/YourDiscordInvite", "_blank");
});

const chatBtn = document.getElementById("chat-btn");
if (chatBtn) {
  chatBtn.addEventListener("click", () => {
    const choice = confirm("💬 Message via Telegram (OK) or Discord (Cancel)?");
    window.open(choice ? "https://t.me/YourTelegramUsername" : "https://discord.gg/YourDiscordInvite", "_blank");
  });
}

/* ===============================
   FLOATING PARTICLE LIGHTS
================================ */
function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  const particleCount = 60;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 1;
      this.color = `rgba(164,125,244,${Math.random() * 0.6 + 0.2})`;
      this.vx = Math.random() * 0.5 - 0.25;
      this.vy = Math.random() * 0.5 - 0.25;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
  }

  for (let i = 0; i < particleCount; i++) particles.push(new Particle());

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  canvas.style.position = "fixed";
  canvas.style.inset = 0;
  canvas.style.zIndex = "0";
  canvas.style.pointerEvents = "none";
}

/* ===============================
   INTERSECTION OBSERVER FADE
================================ */
function initFadeSections() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-section').forEach(sec => observer.observe(sec));
}

window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (!loader) return;

  loader.classList.add("hide");
  setTimeout(() => loader.remove(), 450);
});

function initBrandOrbit() {
  const brand = document.querySelector(".brand");
  if (!brand) return;

  const ufo = brand.querySelector(".ufo");
  const p1 = brand.querySelector(".planet.p1");
  const p2 = brand.querySelector(".planet.p2");
  const p3 = brand.querySelector(".planet.p3");
  if (!ufo || !p1 || !p2 || !p3) return;

  let t = 0;
  const speed = 0.0035;

  function tick() {
    const rect = brand.getBoundingClientRect();

    const pad = 7;
    const w = rect.width + pad * 2;
    const h = rect.height + pad * 2;

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const rx = w / 2 - 10;
    const ry = h / 2 - 10;

    t = (t + speed) % 1;

    const ang = t * Math.PI * 2;
    const x = cx + rx * Math.cos(ang);
    const y = cy + ry * Math.sin(ang);

    ufo.style.left = `${x}px`;
    ufo.style.top = `${y}px`;

    const rot = ang + Math.PI / 2;
    ufo.style.transform = `translate(-50%, -50%) rotate(${rot}rad)`;

    const ang1 = ((t * 1.15) + 0.22) * Math.PI * 2;
    p1.style.left = `${cx + (rx - 16) * Math.cos(ang1)}px`;
    p1.style.top  = `${cy + (ry - 16) * Math.sin(ang1)}px`;

    const ang2 = ((t * 0.82) + 0.58) * Math.PI * 2;
    p2.style.left = `${cx + (rx + 6) * Math.cos(ang2)}px`;
    p2.style.top  = `${cy + (ry + 6) * Math.sin(ang2)}px`;

    const ang3 = ((t * 1.45) + 0.86) * Math.PI * 2;
    p3.style.left = `${cx + (rx - 28) * Math.cos(ang3)}px`;
    p3.style.top  = `${cy + (ry - 28) * Math.sin(ang3)}px`;

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = form.querySelector("button[type='submit']");
    const oldText = btn ? btn.textContent : "";
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Sending...";
    }

    try {
      const SERVICE_ID = "service_q7n3ybj";
      const TEMPLATE_ID = "template_r1f5vxu";

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form);

      alert("Sent! I’ll get back to you soon.");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Send failed. Please try again later.");
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = oldText;
      }
    }
  });
}

function initFloatingImages() {
  const container = document.querySelector('.floating-images');
  if (!container) return;

  const imageSources = [
    'https://github.com/user-attachments/assets/0b9a5396-906b-4246-bf1e-9d9d7d2d3414',
    'https://github.com/user-attachments/assets/635a2835-0478-4995-a633-92a2dce07d79',
    'https://github.com/user-attachments/assets/9de9165b-be6d-413e-a33b-66460eda22f0',
    'https://github.com/user-attachments/assets/e39e1293-c3d1-4f35-953c-b827f076a59b',
    'https://github.com/user-attachments/assets/c978c779-d08d-47a5-894e-f33482cb069a',
    'https://github.com/user-attachments/assets/f237ceec-1613-4fdf-aac3-a13008866808',
    'https://github.com/user-attachments/assets/20302b7f-14b4-4394-9c93-14b82d467424',
    'https://github.com/user-attachments/assets/98089307-65a6-4be7-be59-21a81b266d99',
    'https://github.com/user-attachments/assets/ee962137-3cf2-4b55-a56b-928fc4a9e2d7',
    'https://github.com/user-attachments/assets/a1aec806-f443-402c-8c4d-4022f8a7447d',
    'https://github.com/user-attachments/assets/2adce9cf-4255-4f6e-9c91-b2a6fcf7ee13'
  ];

  /* ===============================
     CONFIG
  ================================ */
  const isMobile = window.innerWidth < 768;

  const MAX_IMAGES = isMobile ? 3 : 6;
  const MAX_LIFE   = isMobile ? 3800 : 5000;
  const FADE_TIME  = 900;

  const MIN_SIZE = isMobile ? 150 : 260;
  const MAX_SIZE = isMobile ? 240 : 520;

  const MOVE_SPEED   = isMobile ? 0.05 : 0.1;
  const SCROLL_FACTOR = isMobile ? 0.15 : 0.35;

  const rand = (a, b) => a + Math.random() * (b - a);

  let scrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  }, { passive: true });

  function viewport() {
    return { w: window.innerWidth, h: window.innerHeight };
  }

  /* ===============================
     CORE SPAWN
  ================================ */
  function spawnImage({ x, y, force = false } = {}) {
    if (container.children.length >= MAX_IMAGES && !force) return;

    const { w, h } = viewport();

    const img = document.createElement('img');
    img.className = 'floating-image';
    img.src = imageSources[Math.floor(Math.random() * imageSources.length)];

    img.loading = "eager";
    img.decoding = "async";
    img.fetchPriority = "high";

    const size = rand(MIN_SIZE, MAX_SIZE);
    img.style.width = `${size}px`;

    if (x == null || y == null) {
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0) { x = -size; y = rand(0, h); }
      if (edge === 1) { x = w + size; y = rand(0, h); }
      if (edge === 2) { x = rand(0, w); y = -size; }
      if (edge === 3) { x = rand(0, w); y = h + size; }
    }

    const dx = rand(-MOVE_SPEED, MOVE_SPEED);
    const dy = rand(-MOVE_SPEED, MOVE_SPEED);
    const rot = rand(-18, 18);
    const baseScale = rand(0.85, 1.05);

    img.style.left = `${x}px`;
    img.style.top  = `${y}px`;
    img.style.transform = `scale(0.75) rotate(${rot}deg)`;

    container.appendChild(img);

    requestAnimationFrame(() => {
      img.classList.add('show');
      img.style.transform = `scale(${baseScale}) rotate(${rot}deg)`;
    });

    let life = 0;
    let last = performance.now();

    function animate(now) {
      const dt = now - last;
      last = now;

      const scrollOffset = scrollY * SCROLL_FACTOR;

      x += dx * dt;
      y += dy * dt + scrollOffset * 0.002;

      img.style.transform = `
        translate(${x}px, ${y}px)
        scale(${baseScale})
        rotate(${rot}deg)
      `;

      life += dt;
      if (life < MAX_LIFE || force) {
        requestAnimationFrame(animate);
      } else {
        img.style.transform = `
          translate(${x}px, ${y}px)
          scale(0.9)
          rotate(${rot}deg)
        `;
        img.classList.remove('show');
        setTimeout(() => img.remove(), FADE_TIME);
      }
    }

    requestAnimationFrame(animate);
  }

  /* ===============================
     AUTO SPAWN LOOP
  ================================ */
  function spawnLoop() {
    spawnImage();
    setTimeout(spawnLoop, rand(350, 1800));
  }
  spawnLoop();

  /* ===============================
     CLICK TO SPAWN
  ================================ */
  window.addEventListener('pointerdown', (e) => {
    // tránh click vào button / link
    if (e.target.closest('a, button, input, textarea')) return;

    spawnImage({
      x: e.clientX,
      y: e.clientY,
      force: true
    });
  }, { passive: true });
}

/* ===============================
   INIT EVERYTHING
================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initThemeToggle();
  initParticles();
  initFadeSections();
  initBrandOrbit();
  initContactForm();
  initTypingEffect();
  // initFloatingImages();

  // ScrollReveal animations
  if (window.ScrollReveal) {
    ScrollReveal().reveal('.section-title', {
      delay: 200,
      duration: 800,
      origin: 'bottom',
      distance: '40px',
      easing: 'ease-out',
      opacity: 0,
    });

    ScrollReveal().reveal('.project-card', {
      interval: 150,
      distance: '60px',
      origin: 'bottom',
      duration: 1000,
      opacity: 0,
      easing: 'ease-in-out',
    });
  }
});
