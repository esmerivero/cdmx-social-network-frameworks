import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class CarouselWelcome extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/haX0eFtD86V3__kZrpDKDzX76dAIBHSwEmAjuUgHIjFa4gFo9K_gi0FSyZzSy6w2acnolksLuwup2gThAeAyBYuZblKY53ajZiE9NqKaixBp6nl9G8d6I5cT3l6J_4bt0N8WqjbiMsgGYpBGmIUr1Tt1IndAKW9dy2qdd2IIEngY9_4pUFMFWd9GHBERBu0jCyjmLr1Gmf_nyBeq67dLyKm2Ya9ScTfxUGKxIZbkEtmfWtz0Ui7uP5UucVO4cobGD2RGeNB8kZmtCsjSjxWQk3zxrr164XPOexEkzWQPh0rwcyKXwWF9ZuU5dzFZUUnHLFh7IGHv2T0v-KdC9qjTt5xAHhmUvcu9kRsQRtAzTVwi_2HjQCvNmaJRW4GWJxRVDnwvHkNmGQB-4vK-uUaVm9nEWwKxndZX-Lzma2didBngzP7tEpkBioAiAzLFYhDEYB9wYiKWzYeczJSTluCoIUZNbn_HZZY1m-Ziz9y4VETvvOY0wgTiXvPTrRD2yjSG50SGkBNMeoDowU83ZTzWFwPAALNaV9LBCsw7QUDznc6bzLgAxH_bpu0N8ZzYqY42-BwbsQAYxjLYBOX_hBMD2INeskTXyPEeACyvZi9h8QRxQ1bZPY96Ar7IafDFtw=w948-h632-no"
            />
            <Carousel.Caption>
              <h3>Sube</h3>
              <p>Sube todos los momentos más importantes que disfrutas con tu can</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/w02nry3V7um2xzt0cakvdwOcB2vf2rA0v5d2sZt5zlVKa8nptIOMOvtvwfEUWU3Zf9ryys39Lm5ZFBYKjKMjiUPcMSLUM208H6XE3PlUiIYRek3WHh0VhTCQvT5vTs74TKSPZDkimg1bdJ_avLloMG3tI7gUGL0SD9YiknwHudqiZfrF0JzhJYqD492xf9q9S-QnxzJKFNq1X_cOQmMaBLNe98TK4DatyQcagO8Tb6HAIwZNZqbhz0-p4PaQJBv8jaIyvbpC079XejCUvn9voK9wr8LYy_5IdEjdoUpv-MEETZ8Xo-sq3SSnIxVCTRYrBZWO2J7MtJaoie_Gk0jvgB1llGp4Zbg6BjIJ5EYWnOG1kHwzmhimt1GpECgnKxl2oMbsvL7ALxuFfLoC6jhnekSkTkG4whxJeIB1LcJ-9F2A8IdIKzgQLypW0538sl7-VTTSMbHd9LcgHlVf62FDXzSK_zCjdZW-dscOoExDBMsU9lyNymDzHIA2AhOhnaclQqITPmx6J9Li3Q5KKC8CEVzNcwiCzusO7HEYcQga_Zg2xvK8SocwdwyxD3I0GGXI0pq9suUWAGLTONjlPo01z1Lfpb-aJzztxYU-y1odOrNNMr4JJ-Jw_TaTO9Mkng=w948-h632-no"
            />
  
            <Carousel.Caption>
              <h3>Comparte</h3>
              <p>Comparte con todos tus amigos las aventuras</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/Lm06tzXiYtjHeed0EWb_EQOFaywcj_S7ltvipABpfo1-4vWyrIT25apmc2ofLRTjXKheEhlHa6gD5oNpop75sPyuQUpYnaUO_PgpnSS21b0IiCUQjN5_DYdGoj1zmg9-0qk1ZmzS4-jnlvHFLvPLK0KUp60WLxUnABeMbOy5UC8waBkwSVeVQ__KNVm6YcrCGK33n_iBpxIlwBRlBHfi53tT2eOEF9J-Q8tvJjU6jxBURhWu_vlkgae-sEBJMNO1tL20aDmV7bD5QQovQ1HoxcfMQY7GLO2AUY08hlKM3ArOWz0RigRuIubH91LgTXtUmhtQdx0N2q_TMeU-uvv41Mi-40QUwvHyS-Uay6LYoJ_bRh28cw9teTyzPDB1G08da2zhbSz-5zVEePO4qTgDRxNOTKzdC2L3fIus5uFNgVHYOplnPGeslovYjCqgDoRO3wsxbClftbsy-3TzqCvabvNgkfR5GpPazPpeq5QIBR0SG0hko-kKqjrt2xiyZZAGzFNM0za6ahNeWw6l4udC6OPe5zLDwLF3gX8KcvFm7WOuB9RS1_JuEG9rfcCbqReXnyGpjNOfXRBDlz4dulTqXIXkz3SWT41RQVYmijS1GoIEJfIFAJwKEEBsaSs8Iw=w948-h632-no"
            />
  
            <Carousel.Caption>
              <h3>Comenta</h3>
              <p>Puedes hacer nuevas amistades, dando 'Me gusta' y comentando otras fotos</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }

  export default CarouselWelcome;