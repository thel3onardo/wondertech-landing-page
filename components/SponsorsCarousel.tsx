import { Container, Flex } from '@chakra-ui/react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Sponsor } from './Sponsor';

export function SponsorsCarousel() {
  return (
    <Container maxW={1180}>
      <Flex
        h="20vh"
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          breakpoints={{
            720: {
              spaceBetween: 10,
              slidesPerView: 10
            }
          }}
        >
          <SwiperSlide>
            <Sponsor href="https://alura.com.br" logo="patrocinadores/alura.png" alt="Alura logo"/>
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://ezdevs.com.br/" logo="patrocinadores/ez.png" alt="Ez logo"/>
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://codamos.com.br" logo="patrocinadores/codamos.png" alt="Codamos logo"/>
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://twitter.com/codigofalado" logo="patrocinadores/codigo-falado.png" alt="Codigo falado logo"/>
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://ideen.tech/" logo="patrocinadores/ideen.jpg" alt="Ideen logo"/>
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://zup.com.br" logo="patrocinadores/zup.jpg" alt="Zup logo"/>
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://www.lambda3.com.br/" logo="patrocinadores/lambda.jpg" alt="Lambda3 logo"/>
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://vindi.com.br/" logo="patrocinadores/vindi.jpg" alt="Vindi logo"/>
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://linuxtips.io/" logo="comunidades/linuxtips.jpg" alt="Linuxtips logo"/>
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://getup.io/" logo="patrocinadores/getup.jpg" alt="Getup logo"/>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Container>
  );
}