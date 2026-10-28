import { useEffect, useState } from 'react'
import photo1 from './assets/IMG_7571.PNG'
import photo2 from './assets/IMG_7584.PNG'
import photo3 from './assets/IMG_7583.PNG'
import photo4 from './assets/IMG_7585.PNG'
import photo5 from './assets/IMG_7567.PNG'
import photo6 from './assets/IMG_7572.PNG'
import photo7 from './assets/IMG_7582.PNG'
import menuImage1 from './assets/menu/1.png'
import menuImage2 from './assets/menu/2.jpg'
import menuImage3 from './assets/menu/3.png'
import menuImage4 from './assets/menu/4.png'
import menuImage5 from './assets/menu/5.png'
import menuImage6 from './assets/menu/6.PNG'
import menuImage7 from './assets/menu/7.PNG'
import menuImage8 from './assets/menu/8.PNG'
import menuImage9 from './assets/menu/9.PNG'
import menuImage10 from './assets/menu/10.PNG'
import menuImage11 from './assets/menu/11.PNG'
import menuImage12 from './assets/menu/12.PNG'
import menuImage13 from './assets/menu/13.PNG'
import menuImage14 from './assets/menu/14.png'
import menuImage15 from './assets/menu/15.png'
import menuImage16 from './assets/menu/16.JPG'
import menuImage17 from './assets/menu/17.JPG'
import menuImage18 from './assets/menu/18.PNG'
import menuImage19 from './assets/menu/19.PNG'
import menuImage20 from './assets/menu/20.PNG'
import menuImage21 from './assets/menu/21.PNG'
import menuImage22 from './assets/menu/22.PNG'
import menuImage23 from './assets/menu/23.PNG'
import menuImage24 from './assets/menu/24.PNG'
import menuImage25 from './assets/menu/25.PNG'
import menuImage26 from './assets/menu/26.PNG'
import menuImage27 from './assets/menu/27.PNG'
import menuImage28 from './assets/menu/28.PNG'
import menuImage29 from './assets/menu/29.PNG'

const menuImages = [
  menuImage1, menuImage2, menuImage3, menuImage4, menuImage5, menuImage6,
  menuImage7, menuImage8, menuImage9, menuImage10, menuImage11, menuImage12,
  menuImage13, menuImage14, menuImage15, menuImage16, menuImage17, menuImage18,
    menuImage19, menuImage20, menuImage21, menuImage22, menuImage23, menuImage24, menuImage25, menuImage26, menuImage27, menuImage28, menuImage29,
  ]

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
]

const flowers = [
  { name: 'Hoa Mẫu đơn', latin: 'Paeonia', image: photos[0] },
  { name: 'Hoa tulip Hàn Quốc', latin: 'Rosa', image: photos[1] },
  { name: 'Hoa đồng tiền kim', latin: 'Dianthus', image: photos[2] },
  { name: 'Hoa mao lương trắng', latin: 'Ranunculus', image: photos[3] },
  { name: 'Hoa ly kép', latin: 'Chamelaucium', image: photos[4] },
  { name: 'Hoa sen nhiều cánh', latin: 'Chamelaucium', image: photos[5] },
  { name: 'Hoa hồng môn', latin: 'Chamelaucium', image: photos[6] },

]

const categories = ['Mẫu nổi bật', 'Mẫu đặc biệt', 'Mẫu cắm nhà', 'Mẫu hoa bó', 'Mẫu hoa cưới']

type Product = {
  name: string
  category: number
  flowers: string
  wrapping: string
  tone: string
  size: string
  imageUrl: string
}

type CartItem = {
  id: string
  name: string
  imageUrl: string
}

const cartStorageKey = 'soha-fleur-cart'

function loadCart(): CartItem[] {
  try {
    const storedCart = localStorage.getItem(cartStorageKey)
    if (!storedCart) return []

    const parsed: unknown = JSON.parse(storedCart)
    if (!Array.isArray(parsed)) throw new Error('Stored cart must be an array.')

    const validItems = parsed.filter((item): item is CartItem =>
      typeof item === 'object' &&
      item !== null &&
      typeof item.id === 'string' &&
      typeof item.name === 'string' &&
      typeof item.imageUrl === 'string',
    )
    if (validItems.length !== parsed.length) {
      console.error('Some invalid items were skipped while loading the shopping cart.')
    }
    return validItems
  } catch (error) {
    console.error('Unable to load the shopping cart from local storage.', error)
    return []
  }
}

const products: Product[] = [
  { name: 'Ivory Muse', category: 0, flowers: 'Thảo Đường Hoàng Đế, Cẩm tú cầu, Tulip, Thược dược, Lan hồ điệp trắng và hoa Allium', wrapping: 'Giấy gói mờ cao cấp tone màu trắng kem kết hợp ruy băng lụa màu hồng pastel', tone: 'Trắng - Hồng', size: 'L', imageUrl: '' },
  { name: 'Blush Hour', category: 0, flowers: 'Hoa hồng Nhật, Cẩm tú cầu hồng, Lan hồ điệp trắng, hoa trang trí (Thanh liễu / Tuyết mai)', wrapping: 'Giấy gói bóng mờ, cốt giấy lụa mềm', tone: 'Hồng pastel', size: 'M', imageUrl: '' },
  { name: 'Golden Haze', category: 0, flowers: 'Hoa thược dược, Hoa ly cam, Hoa loa kèn, Hoa lan vũ nữ, Thảo đường hoàng đế, Calla Lily và các loại hoa lá phụ đi kèm', wrapping: 'Giấy mờ kết hợp giấy lụa mếch cao cấp, thắt ruy băng lụa satin cổ điển', tone: 'Cam sữa', size: 'L', imageUrl: '' },
  { name: 'Petal Poetry', category: 0, flowers: 'Hoa Tulip cánh tua, Hoa hồng Pink Ohara, Hoa Calla Lily, Hoa cẩm chướng, hoa phụ Astilbe / Thảo đường và lá bạc', wrapping: 'Giấy lụa mếch cao cấp màu trắng kem', tone: 'Trắng - Hồng', size: 'M', imageUrl: '' },
  { name: 'Soft Devotion', category: 0, flowers: 'Hoa loa kèn trắng, hoa cúc đồng tiền, hoa thược dược lớn và các loại hoa hồng mix', wrapping: 'Giấy gói mềm mại tông hồng/trắng kèm nơ ruy băng dài', tone: 'Trắng - Hồng', size: 'L', imageUrl: '' },
  { name: 'Velvet Flame', category: 1, flowers: 'Thảo Đường Hoàng Đế, Cúc Mẫu Đơn, Calla Lily, cành quả mọng và nhánh hoa chuỗi ngọc trắng xanh', wrapping: 'Không có', tone: 'Đỏ', size: 'L', imageUrl: '' },
  { name: 'Rosewater Dream', category: 1, flowers: 'Thảo Đường Nam Phi, Cẩm Tú Cầu, lan Hải Đường, Calla Lily, Ly Nhện và dải hoa đuôi chồn Dền Rủ', wrapping: 'Không có', tone: 'Hồng', size: 'L', imageUrl: '' },
  { name: 'Wild Solstice', category: 1, flowers: 'Ghim Đệm, Hướng Dương cánh xanh, Mẫu Đơn / Sen Đa Lộc hồng, Cẩm Chướng, lan Vũ Nữ, hoa Phi Yến và cành củi khô', wrapping: 'Không có', tone: 'Tropical', size: 'L', imageUrl: '' },
  { name: 'Crimson Echo', category: 1, flowers: 'Thảo Đường Hoàng Đế, Lan Vũ Nữ, hoa Hồng Môn, Ly Nhện, Huệ Tây, cành quả phụ và nhánh cây Bắt Mồi', wrapping: 'Giấy OPP mờ trắng và giấy gói hai mặt tone ghi cao cấp, dải ruy băng lụa xám nhạt', tone: 'Trắng - Đỏ', size: 'L', imageUrl: '' },
  { name: 'Midnight Veil', category: 1, flowers: 'Thảo Đường Hoàng Đế, Thảo Đường Nhung, Hành Kiểng, hoa Hồng Môn, Calla Lily, hoa Nhím Biển, Cúc Spider trắng, lá keo bạc nhuộm khói và cành mây', wrapping: 'Không có', tone: 'Trắng - Đen - Xanh khói', size: 'XL', imageUrl: '' },
  { name: 'Autumn Ember', category: 1, flowers: 'Quả lựu, hoa Mẫu Đơn, Địa Lan màu đỏ rượu, chuỗi quả Tràng Hạt và cành quả mọng dại', wrapping: 'Không có', tone: 'Đỏ - Cam', size: 'L', imageUrl: '' },
  { name: 'Pearl Reverie', category: 3, flowers: 'Ly Kép, Búp Sen, Cát Tường, Mao Lương, Đài Sen non và các cành hoa bụi nhỏ', wrapping: 'Giấy gói lụa mờ trắng cao cấp, ruy băng vải voan hồng nhạt', tone: 'Trắng - Hồng', size: 'M', imageUrl: '' },
  { name: 'Scarlet Whisper', category: 3, flowers: 'Calla Lily, dải hoa Dền Rủ và cành cỏ đồng nội', wrapping: 'Giấy gói xi măng kraft kết hợp lớp giấy lụa trắng lót bên trong, thắt ruy băng vải màu hồng pastel', tone: 'Đỏ', size: 'S', imageUrl: '' },
  { name: 'Pink Reverie', category: 3, flowers: 'Tulip', wrapping: 'Giấy gói lụa mờ màu trắng/kem, thắt ruy băng satin lụa màu hồng pastel', tone: 'Hồng', size: 'S', imageUrl: '' },
  { name: 'Rosy Daydream', category: 3, flowers: 'Hồng Spray đan xen Mao Lương nhỏ, cúc Họa Mi, cúc Chocolate đen nhỏ và bông quả khô tròn', wrapping: 'Giấy vân vải màu kem, lớp vải ren hoa nhí trắng, nơ ruy băng voan hồng họa tiết chìm', tone: 'Hồng pastel', size: 'S', imageUrl: '' },
  { name: 'Rustic Charm', category: 3, flowers: 'Ly Kép, Ly Đơn, hoa Hồng Chùm, hoa Nhím Biển và cúc Chocolate đen', wrapping: 'Giấy xơ mướp/giấy thô thủ công màu nâu kraft có vân nổi, dây thừng sáp thắt nơ', tone: 'Trắng - Hồng', size: 'S', imageUrl: '' },
  { name: 'Lace & Light', category: 3, flowers: 'Cẩm Chướng, hoa Hồng, hoa Thủy Tiên, hoa Răng Cưa / Cúc Thủy Tinh trắng, cành Cỏ Đồng Nội và các nụ hoa xanh', wrapping: 'Giấy thô thủ công/giấy xơ mướp màu kem, viền rách, lớp vải ren hoa hồng trắng và ruy băng voan mờ kèm chuỗi hạt ngọc trai nhân tạo', tone: 'Trắng - Hồng', size: 'S', imageUrl: '' },
  { name: 'Blush Serenity', category: 2, flowers: 'Cẩm Tú Cầu, hoa Tulip hồng, dải hoa đuôi chồn Dền Rủ, hoa Răng Cưa / Cúc Thủy Tinh và Tuyết Mai trắng', wrapping: 'Không có', tone: 'Hồng', size: 'XL', imageUrl: '' },
  { name: 'Quiet Autumn', category: 2, flowers: 'Thảo Đường Vệ Nữ, hoa Ly bản địa, Tulip cánh nhọn, Cát Tường, Thủy Tiên, Lan Vũ Nữ, hoa Đại Tự Sản và cành hoa bụi nhỏ', wrapping: 'Không có', tone: 'Trắng - Nâu', size: 'M', imageUrl: '' },
  { name: 'Pink Cloud', category: 2, flowers: 'Hoa hồng bụi nhập khẩu', wrapping: 'Không có', tone: 'Hồng pastel', size: 'XL', imageUrl: '' },
  { name: 'Golden Hour', category: 2, flowers: 'Địa Lan dạng chuỗi, Calla Lily, Lan Vũ Nữ, hoa bụi trắng nhỏ và cành cỏ cảnh', wrapping: 'Không có', tone: 'Vàng', size: 'XL', imageUrl: '' },
  { name: 'Citrus Skies', category: 2, flowers: 'Hoa Dơn, hoa Đồng Tiền nhí và cành nụ hoa xanh', wrapping: 'Không có', tone: 'Cam - Xanh', size: 'S', imageUrl: '' },
  { name: 'Rosé Waltz', category: 2, flowers: 'Hoa Hồ Điệp, Thược Dược, Đồng Tiền nhí, Cẩm Chướng, Cúc Bellis, các cụm hoa Mào Gà và cành hoa bụi trắng cao', wrapping: 'Không có', tone: 'Hồng - Trắng', size: 'L', imageUrl: '' },
  { name: 'Pure Éclat', category: 4, flowers: 'Hoa Dạ Lan Hương', wrapping: 'Không có', tone: 'Trắng', size: 'S', imageUrl: '' },
  { name: 'Velvet Romance', category: 4, flowers: 'Hoa hồng ngoại dáng cúp, lá mận đỏ/lá thạch nam tối màu và nhánh cỏ đồng nội', wrapping: 'Không có', tone: 'Trắng - Hồng', size: 'S', imageUrl: '' },
  { name: 'Circle of Grace', category: 4, flowers: 'Hoa Hồ Điệp, Calla Lily, Tulip trắng, hoa Ren Trắng, Mao Lương và nhánh lá xanh', wrapping: 'Khung vòng tre/gỗ hình tròn cầm tay', tone: 'Chưa ghi', size: 'M', imageUrl: '' },
  { name: 'Dragonfly Dreams', category: 4, flowers: 'Ngọc Minh Châu, Calla Lily, Dạ Lan Hương, hoa chuông nhỏ và các cành phụ khô; kèm mô hình chuồn chuồn màu hồng trong suốt', wrapping: 'Không có', tone: 'Hồng - Tím', size: 'M', imageUrl: '' },
  { name: 'Snowlight', category: 4, flowers: 'Calla Lily, Tulip cánh tua trắng, Cẩm Chướng, hoa Nhím Biển, hoa bụi nhỏ màu trắng kem và cỏ tóc tiên/lá măng', wrapping: 'Không có', tone: 'Trắng', size: 'M', imageUrl: '' },
  { name: 'Pearl Butterfly', category: 4, flowers: 'Calla Lily, các lớp rêu Tóc Tiên và hoa nhí màu trắng kem', wrapping: 'Khung vòng ngọc trai cầm tay, phụ kiện cánh bướm, chuỗi ngọc trai nhân tạo và ruy băng lụa mỏng', tone: 'Trắng - Tím', size: 'S', imageUrl: '' },

]

function Icon({ name }: { name: 'menu' | 'bag' | 'arrow' | 'close' }) {
  const paths = {
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    bag: <><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    arrow: <path d="m9 18 6-6-6-6" />,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[name]}</svg>
}

function Action({ children, className = '', onClick, label }: { children: React.ReactNode; className?: string; onClick?: () => void; label?: string }) {
  return <button className={className} onClick={onClick} aria-label={label}>{children}</button>
}

function navigate(path: string) {
  history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo(0, 0)
}

function Header({ openMenu, cart }: { openMenu: () => void; cart: number }) {
  return (
    <header className="site-header">
      <Action className="icon-button" onClick={openMenu} label="Mở menu"><Icon name="menu" /></Action>
      <Action className="wordmark" onClick={() => navigate('/')} label="Về trang chủ"><img src="/logo.png" alt="Soha Fleur Floral Studio" /></Action>
      <Action className="icon-button cart-button" onClick={() => navigate('/cart')} label="Giỏ hàng">
        <Icon name="bag" />{cart > 0 && <span className="cart-count">{cart}</span>}
      </Action>
    </header>
  )
}

function Menu({ close }: { close: () => void }) {
  const go = (path: string) => { close(); navigate(path) }
  const contactLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/soha.fleur?mdxt=OGJ1dDhhZTNmdWEx' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61595125123335' },
  ]

  return (
    <div className="menu-layer" onClick={close}>
      <aside className="menu-drawer" onClick={e => e.stopPropagation()}>
        <Action className="menu-close" onClick={close} label="Đóng menu"><Icon name="close" /></Action>
        <div className="menu-mark"><img src="/logo.png" alt="Soha Fleur Floral Studio" /></div>
        <nav>
          <Action onClick={() => go('/about')}><p>GIỚI THIỆU</p></Action>
          <Action className="feature-link" onClick={() => go('/pick')}>✿ Tự tay lựa bó<br />hoa của mình</Action>
          <Action className="feature-link" onClick={() => go('/products')}><p style={{ margin: 0 }}>SẢN PHẨM</p></Action>
          {categories.map((category, i) => <Action key={category} onClick={() => go(`/category/${i}`)}>{category}</Action>)}
          <div className="menu-contact-group">
            <p>Liên hệ</p>
            <br />
            <div >
              {contactLinks.map(link => (
                <a style={{display:'block'}} key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
              ))}
            </div>
          </div>
        </nav>
      </aside>
    </div>
  )
}

function AllProductsPage() {
  const [activeFilter, setActiveFilter] = useState<number | 'all'>('all')
  const filteredProducts = activeFilter === 'all'
    ? products.map((product, index) => ({ product, index }))
    : products
        .map((product, index) => ({ product, index }))
        .filter(({ product }) => product.category === activeFilter)

  return (
    <main className="catalog-page products-page">
      <p className="eyebrow">Sản phẩm</p>
      <h1>Tất cả sản phẩm</h1>

      <div className="product-filters" aria-label="Bộ lọc sản phẩm">
        <Action
          className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
          label="Hiển thị tất cả sản phẩm"
        >
          Tất cả
        </Action>
        {categories.map((category, index) => (
          <Action
            key={category}
            className={`filter-button ${activeFilter === index ? 'active' : ''}`}
            onClick={() => setActiveFilter(index)}
            label={`Lọc theo ${category}`}
          >
            {category}
          </Action>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map(({ product, index }) => (
          <Action className="product-card" key={`${product.name}-${index}`} onClick={() => navigate(`/product/${index}?from=${encodeURIComponent('/products')}`)}>
            {product.imageUrl || menuImages[index]
              ? <img src={product.imageUrl || menuImages[index]} alt={product.name} />
              : <div className="product-image-placeholder" role="img" aria-label={`Chưa có hình ảnh cho ${product.name}`}>Hình ảnh sản phẩm</div>}
            <span>{product.name}</span>
            <small>{product.tone} · Size {product.size}</small>
          </Action>
        ))}
      </div>
    </main>
  )
}

function Home() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setActive(current => (current + 1) % flowers.length), 1500)
    return () => window.clearInterval(timer)
  }, [])
  return (
    <main className="home-page">
      <section className="home-copy">
        <p className="eyebrow">Tự tay tạo nên điều muốn nói</p>
        <h1 style={{ fontSize: '3.0rem', lineHeight: '1.2' }}>Hoa thay<br />lời muốn nói.</h1>
        <p>Soha Fleur giúp bạn khám phá và lựa chọn từng loài hoa để tạo nên một món quà mang dấu ấn riêng.</p>
        <Action className="text-link" onClick={() => navigate('/pick')}>Bắt đầu chọn hoa <Icon name="arrow" /></Action>
      </section>
      <section className="home-showcase" aria-label="Các lựa chọn hoa tự động">
        <p className="showcase-note">Khám phá lựa chọn</p>
        <div className="auto-wheel" aria-live="off">
          {flowers.map((item, index) => {
            let position = index - active
            if (position > flowers.length / 2) position -= flowers.length
            if (position < -flowers.length / 2) position += flowers.length
            return <span
              key={item.name}
              className={index === active ? 'active' : ''}
              role="button"
              tabIndex={0}
              aria-label={`Chọn ${item.name}`}
              onClick={() => setActive(index)}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActive(index)
                }
              }}
              style={{ '--wheel-position': position } as React.CSSProperties}>{item.name}</span>
          })}
        </div>
        <div className="home-flower-frame">
          {flowers.map((item, index) => <img key={item.name} className={index === active ? 'active' : ''} src={item.image} alt={item.name} />)}
        </div>
        <p className="showcase-count">0{active + 1} / 0{flowers.length}</p>
      </section>
    </main>
  )
}

function PickFlower({ add }: { add: (item: Omit<CartItem, 'id'>) => void }) {
  const [active, setActive] = useState(0)
  const flower = flowers[active]
  return (
    <main className="picker-page">
      <div className="picker-copy">
        <p className="eyebrow">Bó hoa của riêng bạn</p>
        <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>Chọn một loài hoa</h1>
        <p style={{ fontSize: '1rem', lineHeight: '1.2' }}>Chạm vào vòng chọn để tìm loài hoa dành cho bạn. Vòng hoa chỉ chuyển động khi bạn tương tác.</p>
      </div>
      <section className="flower-stage">
        <div className="flower-wheel">
          <div className="wheel-line" />
          {flowers.map((item, index) => {
            let position = index - active
            if (position > flowers.length / 2) position -= flowers.length
            if (position < -flowers.length / 2) position += flowers.length
            return (
              <Action
                key={item.name}
                onClick={() => setActive(index)}
                className={`wheel-item ${index === active ? 'active' : ''}`}
                label={`Chọn ${item.name}`}
              >
                <span style={{ '--wheel-position': position } as React.CSSProperties}>{item.name}</span>
              </Action>
            )
          })}
        </div>
        <div className="flower-card-wrap">
          <div className="flower-card">
            <img src={flower.image} alt={flower.name} />
          </div>
          <Action className="add-button" onClick={() => add({ name: flower.name, imageUrl: flower.image })}>Thêm vào giỏ hàng</Action>
        </div>
      </section>
    </main>
  )
}

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">Về Soha Fleur</p>
          <h1>Hoa thay lời<br />muốn nói</h1>
          <p>Soha Fleur là studio hoa cao cấp, mang đến những thiết kế tinh tế và giàu cảm xúc, giúp bạn gửi gắm thông điệp yêu thương theo cách đặc biệt nhất.</p>
          <span className="about-discover">Khám phá về chúng tôi <b>→</b></span>
        </div>
        <img src={photos[0]} alt="Bó hoa hồng phấn" />
      </section>
      <section className="about-story">
        <img src={photos[5]} alt="Hoa hồng trong bình" />
        <div>
          <p className="eyebrow">Câu chuyện thương hiệu</p>
          <h2>Từ những điều<br />thuần khiết nhất</h2>
          <p>Soha Fleur được thành lập với mong muốn mang đến những đóa hoa không chỉ đẹp về hình thức, mà còn chạm đến cảm xúc của người nhận.</p>
          <p>Chúng tôi tin rằng, mỗi bó hoa là một câu chuyện, một lời nhắn gửi và một khoảnh khắc đáng nhớ. Vì thế, từng thiết kế đều được chăm chút tỉ mỉ để truyền tải trọn vẹn thông điệp yêu thương.</p>
        </div>
      </section>
      <section className="about-values">
        <div><span>✣</span><h3>Tinh tế trong<br />từng thiết kế</h3><p>Mỗi bó hoa là sự kết hợp hài hòa giữa nghệ thuật và cảm xúc.</p></div>
        <div><span>◇</span><h3>Chất lượng<br />là ưu tiên hàng đầu</h3><p>Chúng tôi tuyển chọn hoa tươi kỹ lưỡng, đảm bảo độ bền và vẻ đẹp tự nhiên.</p></div>
        <div><span>♡</span><h3>Cá nhân hóa<br />trải nghiệm</h3><p>Mỗi đơn hàng là một câu chuyện riêng, và chúng tôi luôn lắng nghe.</p></div>
        <div><span>▱</span><h3>Giao hoa đúng hẹn</h3><p>Đảm bảo hoa đến tay bạn với sự tinh chu đáo và đúng thời gian.</p></div>
      </section>
      <section className="about-banner">
        <img src={photos[2]} alt="Cận cảnh một đóa hoa hồng" />
        <div><p className="eyebrow">Soha Fleur</p><h2>More than flowers</h2><p>Không chỉ là hoa, mà là cảm xúc.</p></div>
        <span>Khám phá bộ sưu tập →</span>
      </section>
    </main>
  )
}

function Category({ id }: { id: number }) {
  const categoryProducts = products
    .map((product, index) => ({ product, index }))
    .filter(({ product }) => product.category === id)

  return (
    <main className="catalog-page">
      <p className="eyebrow">Bộ sưu tập</p><h1>{categories[id] || categories[0]}</h1>
      <div className="product-grid">
        {categoryProducts.map(({ product, index }) => (
          <Action className="product-card" key={product.name} onClick={() => navigate(`/product/${index}?from=${encodeURIComponent(`/category/${id}`)}`)}>
            {product.imageUrl || menuImages[index]
              ? <img src={product.imageUrl || menuImages[index]} alt={product.name} />
              : <div className="product-image-placeholder" role="img" aria-label={`Chưa có hình ảnh cho ${product.name}`}>Hình ảnh sản phẩm</div>}
            <span>{product.name}</span>
            <small>{product.tone} · Size {product.size}</small>
          </Action>
        ))}
      </div>
    </main>
  )
}

function Product({ id, add }: { id: number; add: (item: Omit<CartItem, 'id'>) => void }) {
  const product = products[id] || products[0]
  const imageUrl = product.imageUrl || menuImages[id]
  const backTarget = (() => {
    const from = new URLSearchParams(window.location.search).get('from')
    if (from && (from.startsWith('/products') || from.startsWith('/category/'))) {
      return from
    }
    return `/category/${product.category}`
  })()

  return (
    <main className="detail-page">
      <div className="detail-gallery-column">
        <Action className="back-link" onClick={() => navigate(backTarget)} label={backTarget === '/products' ? 'Quay lại danh sách sản phẩm' : `Quay lại ${categories[product.category]}`}>
          ← Quay lại
        </Action>
        <div className="detail-gallery">
          {imageUrl
            ? <img src={imageUrl} alt={product.name} />
            : <div className="image-placeholder product-detail-placeholder" role="img" aria-label={`Chưa có hình ảnh cho ${product.name}`}>Hình ảnh sản phẩm</div>}
        </div>
      </div>
      <div className="detail-copy">
        <p className="eyebrow">{categories[product.category]}</p>
        <h1>{product.name}</h1>
        <p className="product-description">{product.flowers}</p>
        <dl className="product-meta">
          <div><dt>Tone màu</dt><dd>{product.tone}</dd></div>
          <div><dt>Kích thước</dt><dd>{product.size}</dd></div>
          <div><dt>Giấy gói</dt><dd>{product.wrapping}</dd></div>
        </dl>
        <Action className="outline-button" onClick={() => add({ name: product.name, imageUrl })}>Thêm vào giỏ hàng</Action>
      </div>
    </main>
  )
}

function Cart({ items, remove }: { items: CartItem[]; remove: (id: string) => void }) {
  const [orderModalOpen, setOrderModalOpen] = useState(false)

  useEffect(() => {
    if (!orderModalOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOrderModalOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [orderModalOpen])

  return (
    <main className="cart-page">
      <p className="eyebrow">Soha Fleur</p>
      <h1>Giỏ hàng</h1>
      {items.length === 0
        ? <p className="cart-empty">Giỏ hàng của bạn đang trống.</p>
        : <div className="cart-list">
            {items.map(item => (
              <article className="cart-item" key={item.id}>
                {item.imageUrl
                  ? <img src={item.imageUrl} alt={item.name} />
                  : <div className="cart-image-placeholder" role="img" aria-label={`Chưa có hình ảnh cho ${item.name}`}>Hình ảnh sản phẩm</div>}
                <h2>{item.name}</h2>
                <Action className="cart-remove" onClick={() => remove(item.id)} label={`Xóa ${item.name} khỏi giỏ hàng`}>Xóa</Action>
              </article>
            ))}
          </div>}
      {items.length > 0 && <Action className="order-button" onClick={() => setOrderModalOpen(true)}>Đặt hàng</Action>}
      {orderModalOpen && (
        <div className="order-modal-backdrop" onClick={() => setOrderModalOpen(false)}>
          <section
            className="order-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-modal-title"
            onClick={event => event.stopPropagation()}
          >
            <Action className="order-modal-close" onClick={() => setOrderModalOpen(false)} label="Đóng">×</Action>
            <p className="eyebrow">Liên hệ đặt hoa</p>
            <h2 id="order-modal-title">Hoàn tất đơn hàng</h2>
            <p>Vui lòng liên hệ với chúng tôi qua một trong các kênh sau để xác nhận đơn hàng:</p>
            <ul className="order-contact-list">
              <li><a href="https://www.instagram.com/soha.fleur?mdxt=OGJ1dDhhZTNmdWEx" target="_blank" rel="noreferrer"><span>Instagram</span><small>soha.fleur</small></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61595125123335" target="_blank" rel="noreferrer"><span>Facebook</span><small>Soha Fleur</small></a></li>
            </ul>
          </section>
        </div>
      )}
    </main>
  )
}

export default function App() {
  const [path, setPath] = useState(location.pathname)
  const [menu, setMenu] = useState(false)
  const [cart, setCart] = useState<CartItem[]>(loadCart)
  useEffect(() => {
    const update = () => setPath(location.pathname)
    addEventListener('popstate', update)
    return () => removeEventListener('popstate', update)
  }, [])
  useEffect(() => {
    try {
      localStorage.setItem(cartStorageKey, JSON.stringify(cart))
    } catch (error) {
      console.error('Unable to save the shopping cart to local storage.', error)
    }
  }, [cart])
  const addToCart = (item: Omit<CartItem, 'id'>) => {
    const cartItem = { ...item, id: `${Date.now()}-${Math.random().toString(36).slice(2)}` }
    setCart(current => [...current, cartItem])
  }
  const categoryMatch = path.match(/^\/category\/(\d+)/)
  const productMatch = path.match(/^\/product\/(\d+)/)
  return (
    <>
      <Header openMenu={() => setMenu(true)} cart={cart.length} />
      {menu && <Menu close={() => setMenu(false)} />}
      {path === '/pick' ? <PickFlower add={addToCart} /> :
       path === '/cart' ? <Cart items={cart} remove={id => setCart(current => current.filter(item => item.id !== id))} /> :
       path === '/about' ? <About /> :
       path === '/products' ? <AllProductsPage /> :
       categoryMatch ? <Category id={Number(categoryMatch[1])} /> :
       productMatch ? <Product id={Number(productMatch[1])} add={addToCart} /> : <Home />}
    </>
  )
}
