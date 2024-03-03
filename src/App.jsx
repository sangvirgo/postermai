import poster from './assets/poster.jpg';
import star from './assets/star.svg';
import avt1 from './assets/avt1.jpg';
import avt2 from './assets/avt2.jpg';
import accumulation from './assets/pink-accumulation.svg';
import redstar from './assets/red-star.jpg';
import like from './assets/like.svg';

export default function App() {
  return (
    <div className='w-[100%] h-[100%] content-center' >
      
{/* poster and desciption  */}
      <div className="bg-[url('./assets/bg-film.jpg')] bg-cover bg-center top-0 z-0 h-[600px] w-[100%] overflow-hidden bg-no-repeat bg-opacity-sm" >

        {/* poster */}

      <div className='mx-auto w-full max-w-6xl  px-5 md:px-8 lg:px-8'>
        <div className='flex flex-wrap items-center md:flex-nowrap md:space-x-10 lg:items-start '>
              <div className='relative  w-full flex md:relative my-[25px] gap-5'>
          {/* image */}
              <div className='w-1/3'>
                <img alt="MAI" src={poster}  decoding="async" data-nimg="intrinsic" className="w-[600px] h-[550px] justify-self-center items-center basis-[350px]"/> 
              </div>
              
              {/* description */}
              <div className='relative  flex-shrink w-2/3'>
                  {/* 18+ */}
                  <div className=" inline-flex h-5  items-center justify-center rounded-sm bg-opacity-80 px-1  text-xs font-semibold text-white bg-red-600 text-opacity-95 cinema-rate-red">18+</div>
                  {/* mai */}
                  <h1 className=" mt-2 text-2xl font-bold text-white md:text-4xl">MAI</h1>
                  {/* mai 2024 151p */}
                  <ul className=" mt-1 flex flex-wrap items-center text-sm text-white text-opacity-60 md:text-base">
                    <li className="">MAI</li>
                    <li className=" mx-2 text-base font-normal">·</li>
                    <li className="">2024</li>
                    <li className=" mx-2 text-base font-normal">·</li>
                    <li className="">151  phút</li>
                  </ul>
                  {/* star */}
                  <div className='flex flex-nowrap items-center space-x-2 overflow-x-auto overflow-y-hidden pb-2 pt-2 text-sm sm:pt-3 md:space-x-3 md:text-base'>
                    <div className='mr-2 flex shrink-0 flex-nowrap items-center space-x-0.5 pb-1'>
                        <img src={star} alt=""  height={28} width={28}/>
                        <div className='flex items-center space-x-1 text-xl'>
                            <div className='text-2xl font-bold text-white'>9.1</div>
                            <div className='text-[10px] text-gray-400 self-end -mb-[3px]'>
                              34.2K đánh giá
                            </div>
                        </div>
                    </div>
                  </div>
                  {/* cap */}
                  <p className="mb-3 italic text-white text-opacity-60">Quá khứ chưa ngủ yên, ngày mai liệu sẽ đến?</p>
                  {/* nd */}
                  <h3 className="font-bold text-white text-opacity-90 sm:text-base">Nội dung</h3>
                  {/* nd dai */}
                  <div className='mt-1 text-sm leading-relaxed text-white text-opacity-70'>
                      "Mai" xoay quanh cuộc đời của một người phụ nữ đẹp tên Mai (do Phương Anh Đào thủ vai) có số phận rất đặc biệt. Bởi làm nghề mát xa, Mai thường phải đối mặt với ánh nhìn soi mói, phán xét từ những người xung quanh. Và rồi Mai gặp Dương (Tuấn Trần) - chàng trai đào hoa lãng tử. Những tưởng bản thân không còn thiết tha yêu đương và mưu cầu hạnh phúc cho riêng mình thì khao khát được sống một cuộc đời mới trong Mai trỗi dậy khi Dương tấn công cô không khoan nhượng. Họ cho mình những khoảnh khắc tự do, say đắm và tràn đầy tiếng cười. Liệu cặp đôi ấy có nắm giữ được niềm hạnh phúc đó dài lâu khi miệng đời lắm khi cay nghiệt, bất công?
                  </div>
                  {/* info */}
                  <div className='mt-3 text-sm text-gray-700'>
                      <div className='mb-2 flex flex-nowrap space-x-4 '>
                        {/* day */}
                        <div>
                          <div className='whitespace-nowrap text-white text-opacity-50'>Ngày chiếu</div>
                          <div className='mt-1 font-bold text-white text-opacity-90'>10/02/2024</div>
                        </div>
                        {/* type */}
                        <div>
                          <div className='whitespace-nowrap text-white text-opacity-50'>Thể loại</div>
                          <div className='mt-1 font-bold text-white text-opacity-90'>Lãng mạn, Tình cảm, Tâm lý</div>
                        </div>
                        {/* nation */}
                        <div>
                          <div className='whitespace-nowrap text-white text-opacity-50'>Quốc gia</div>
                          <div className='mt-1 font-bold text-white text-opacity-90'>Việt Nam</div>
                        </div>
                      </div>
                  </div>
                  {/* trailer review */}


                  <div className="mt-3 flex items-center space-x-4">
                      {/* trailer */}
                      <a target="_blank" className="tracking-click-view-review tracking-focus flex items-center space-x-1.5 py-2 text-sm hover:underline" href="https://www.youtube.com/watch?v=xVWeRnStdSA">

                      <div className="h-6 w-6 rounded-full border-2 border-pink-600 text-white/80">

                        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z" fill="currentColor" fill-rule="nonzero"></path></g></svg>

                      </div>


                      <span className='text-white'>Xem trailer</span>
                    </a>

                        {/* review */}
                        <a target="_blank" className="tracking-click-view-review tracking-focus flex items-center space-x-1.5 py-2 text-sm hover:underline" href="https://www.youtube.com/watch?v=xVWeRnStdSA">

                          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-yellow-300">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-white/85 h-4 w-4 "><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            </div>
                            <span className='text-white'>Xem review</span>
                        </a> 
                  </div>


              </div>
              </div>
        </div>
      </div>


      </div>







      {/* users comment  */}
      <div className='w-[100%] h-[100%] border-t border-gray-200 '>

      <div className='mx-[300px] '>

          {/* evaluation */}
          <h2 className='mb-3 text-[30px] font-bold'>Bình luận từ người xem</h2>

          <div className='flex'>
            <div><img src={star} className='w-[35px] h-[35px] items-center justify-self-center mt-1' alt="star icon" /></div>
            <div className='pl-2 pr-0.5 text-4xl text-gray-600 sm:text-5xl'>9.1</div>
            <div className='mr-1 self-end pb-[3px] text-sm font-nomal text-gray-600 text-2xl mt-2'>/10 </div>
            <div className=' self-end pb-[3px] text-sm font-nomal text-gray-600 text-2xl mt-2'>· 34.2K đánh giá</div>
          </div>

          {/* comment 1 */}
          <div  className='py-4 w-full mt-4 border-b border-gray-200 pb-[50px]'>
            {/* avt username and purchased time  */}
            <div className='relative flex items-center'>
              {/* avt */}
              <img src={avt1} alt="Nguyen Van A" height={60} width={60} loading='lazy' className='rounded-full object-cover h-12 w-12' />
              {/* username and purchased time */}
              <div className='ml-2 sm:ml-3'>
                {/* username */}
                <div className='text-[23px] text-gray-800'>Nguyen Van A</div>
                {/* purchesed time */}
                <div className='mt-0.5 flex items-center'>
                  {/* time */}
                  <div className='text-xs text-gray-500'>3 hôm trước</div>
                  {/* confirm purchase */}
                  <div className='flex items-center pl-2 text-xs text-pink-500'>
                    <img src={accumulation} alt="tich hong" height={20} width={20} />
                    Đã mua qua MoMo
                    </div>
                </div>
              </div>
              {/* red star */}
              <div className='absolute right-1 top-0 '>
                 <img src={redstar} alt="red star" className='w-5' loading='lazy' />
              </div>
            </div>

            {/* component 2*/}
            <div className='relative mt-3'>
                {/* star */}
                <div className='flex items-center mb-0.5 text-md font-semibold text-gray-900'>
                  <img src={star} alt="star" className='h-5 w-5 mr-1'/>
                 {/* point */}
                 <div className='pl-0.5'>10</div>
                  <div className='pl-0.5'>/10 · </div>
                  {/* vote */}
                  <div className='pl-0.5'>Cực phẩm!</div>
                </div>
                {/* comment */}
                <div className='whitespace-pre-wrap break-words text-md leading-relaxed text-gray-900'>
                   Phim hay, chất lượng phim tốt, dàn diễn viên quá chất lượng. Nội dung phim cảm động, có nhiều kịch tính. Lời thoại tốt, gần gũi với thực tế. Cá nhân xem phim trung lập, không ủng hộ Trấn Thành mà ủng hộ phim chất lượng. À, nhạc phim cũng rất xuất sắc, cảnh nóng cũng vừa phải chứ không thừa, phim này cá nhân thấy khoảng 16+ thôi
                </div>
                {/* useful */}
                <div className='mt-4 flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-1'>
                      <img src={like} alt="" height={20} width={20}  />
                      <div className=' text-neutral-700 font-bold'>6 thấy hữu ích</div>
                    </div>
                </div>
            </div>
          </div>


          {/* comment 2 */}
            <div  className='py-4 w-full mt-4 border-b border-gray-200 pb-[50px]'>
            {/* avt username and purchased time  */}
            <div className='relative flex items-center'>
              {/* avt */}
              <img src={avt2} alt="Nguyen Van A" height={60} width={60} loading='lazy' className='rounded-full object-cover h-12 w-12' />
              {/* username and purchased time */}
              <div className='ml-2 sm:ml-3'>
                {/* username */}
                <div className='text-[23px] text-gray-800'>Nguyen Van B</div>
                {/* purchesed time */}
                <div className='mt-0.5 flex items-center'>
                  {/* time */}
                  <div className='text-xs text-gray-500'>10 hôm trước</div>
                  {/* confirm purchase */}
                  <div className='flex items-center pl-2 text-xs text-pink-500'>
                    <img src={accumulation} alt="tich hong" height={20} width={20} />
                    Đã mua qua MoMo
                    </div>
                </div>
              </div>
              {/* red star */}
              <div className='absolute right-1 top-0 '>
                 <img src={redstar} alt="red star" className='w-5' loading='lazy' />
              </div>
            </div>

            {/* component 2*/}
            <div className='relative mt-3'>
                {/* star */}
                <div className='flex items-center mb-0.5 text-md font-semibold text-gray-900'>
                  <img src={star} alt="star" className='h-5 w-5 mr-1'/>
                  {/* point */}
                  <div className='pl-0.5'>1</div>
                  <div className='pl-0.5'>/10 · </div>
                  {/* vote */}
                  <div className='pl-0.5'>Rất tệ!</div>
                </div>
                {/* comment */}
                <div className='whitespace-pre-wrap break-words text-md leading-relaxed text-gray-900'>
                   Đúng là tôi đã mong đợi rất nhiều về bộ phim này, nhưng cuối cùng, nó thực sự làm tôi thất vọng. Tôi cảm thấy kịch bản không được viết tốt, những tình tiết trong phim thường làm mất đi sự logic và hợp lý. Diễn viên cũng không thể hiện tốt vai diễn của mình, và hình ảnh và âm nhạc cũng không ấn tượng. Tôi cảm thấy hỏng tiền vé khi xem bộ phim này và không khuyến khích ai khác xem.  
                </div>
                {/* useful */}
                <div className='mt-4 flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-1'>
                      <img src={like} alt="" height={20} width={20}  />
                      <div className=' text-neutral-700 font-bold'>10 thấy hữu ích</div>
                    </div>
                </div>
            </div>
          </div>

      </div>
      

      </div>

    </div>
  )
}