import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

class Voucher extends Component {
    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }
      componentWillMount() {
        ReactModal.setAppElement('body');
     }
    
    render() {
        return (
            <section className="hero is-fullheight is-primary is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <a onClick={this.handleOpenModal} className="button is-large is-link is-rounded">Get mega voucher</a>
                        <div id="offerVoucher"></div>
                    </div>
                </div>
                <ReactModal 
                    isOpen={this.state.showModal}
                    contentLabel="Voucher for mega maté"
                    onRequestClose={this.handleCloseModal}
                    >
                    <h1>Mega party på Trädgården</h1>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEBAQEBAQGBAXGBISDg8ODw0QFxEXGRUdHxUYHSkgJBolGxUVITEhJSkrLi4uFx8zODMsNzQtLisBCgoKDg0OFQ8NFSsZFR0rLSsrKystLS0rKy0tLSstKzctLTctKy0rLS0rNysrKysrKysrKysrKysrKysrKysrK//AABEIAOYA0gMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABMEAABAwIDBAYHAwYMBQUAAAABAAIDBBESITEFBkFREyJhcYGRBxQyUqGxwULS4SMzo9Hw8RZDYmNyc4OEkrO0wiU0VJOiFURTZIL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAICAgIDAQAAAAAAAAAAAQIRITEDQRJRE2FxBP/aAAwDAQACEQMRAD8A7WiIgIiICIiAiIgIiICKkkBWn1LRx+KC+ihmvavBXA5NBPggmooRrre0CO8KsVrOaCUijirbz+KuMlB0KC4iIgIiICIiAiIgIiICIiAiIgIiIC8JsqJpQ0XKisjfLnfCz4lBXLVjRoxHsF1S6SbhGfNX3dFTsL3OaxrRm9xA8yVzbavpvoIpC2GOSdgYSHj8neXgwhwuBzdw5FE626E2mleRiOFvYc1eNLCwda1ubiuTVXp7hGDo6GR1wMWKdrMLuIFmm47cu5cz3i3+r66Rz3zvjZclkcbujbGM7Dq2JsOJUbJH0vWbx7Og6stVSxkfZM0eMcPZvdWto73bOpmPkfVQWYLlrHskkte2TG5lfJL5nONzrz4uPMnmqpST+A17U2aj6p2b6Qdk1Lmsjq4sb7Wa8PjNzwu4AX8Vn8MDnEfky7LK4JsdMl8aCQjI34diqjrZGuxNkex3vNe4OHLMG6bNR9ih1Nn1osteu3qm9s8+eS9now0F0eo4XyK+OiTa+M3P8om51X0b6Ot/aeShpxXVdPFUddtnzxte9jTZpIJyJHPldNljdaeuaRmc1JbIDoVbhEEzcbCx7X6PY4OBHYQqZaINF2Egjhe4KlCSisUsuIXV9AREQEREBERAREQEREBUyOsLqpQ9ovs1B5BCZTid7A0HvFV7Sr2Qtc5zhGyMYnONgGtFuJ71TtKpMFO57AC4BgaCbNMj3BrbnlicFx3fnfptPJWULAaid7XRyVD3Esa4tGINjGQAu4C3Ia2JQax6SvSDJXn1eFz2UzC4OGMuFScQIcQQLWtkFoYpurivdUWNyOfbr2qphNi2+Rt+ChMVh0YytfLnx/BUgYeICtdHb9yuvAIxce6wCJUl4Of4XXhf9FSW/tyVZBOaCsDFp2X7uape0Z+Cqhfhyw38bEKl47fw8UFVrAa+SNtodO7NU3Oh0VdRMXYTYXFtBbFbiUFcVTIy4jke1t7iz3Nsedua+nvRPtoVmzoSS8vivHJje+Rxe2xvidnmCD2Xsvltgcc10v0X+keLZcFRBOx72l+NuDN7nkBpGeVrNGZKRFd2bHJEXEi7LnT7IUyGYOGSwW62+dJXRxubNE18uG0RkZ0gcQThte5cLLLVcJYcbR1TqOXapQmIrcUmIXVxAREQEREBERAREQFAkb0kgZwGZ7gprzkrGzW3L3cb2Qah6ZNuNpdnvjaR01SQxg4gNIc5w/ogDxIXzbtHaUtTK+aZwfI89Z+FjcR5mwAXUfTptiGWXoGtc6WFwaZAAGNAFy3mTc9w77rmJ6MZDU630aeSJWBHYaXF7XtmbK4Y8LcVsuGViR9bLx83VtfiVaDnOsL5Ds0UJeXuQOFxxvYK9LThpsDcXOfMcCqY43G4Ay7lQ64yN02aVTWGVrfEWVkkCxV5pGeZH1KvRthNgS4ZZm17O7FAh3xL3Af2GqlGFgFw4d3E5qwCf2yKk0pLdB+wVTmADL48VS6+marbHduudx3WKCwCdFdidbLnbxVD4cP71diLTqiI2fc7eefZ0gfEIpYScTongDERoQ61wRlZfR25W3TtGhgq3RiN0wluzFjDSyV7Ne3BfxXyM4+Q+K+ovQuf+DUP95/1cqQrZdnk2IPAlTFBodX95+anKUCIiAiIgIiICIiCl+isbLHt/wBJSHBRdniz5BwyQcF9NFfM2ukgkLejdge0NAHUw2aTlfFre65oSNV030/00jK6OV3SPjkZ1S9oETCMi1pGvM35rlwzyHzUJeRZnM2Cm0cZc4NA1UGwWe3YiLnC4uB9dVGV1NrYzd02rZ2735MXyv2am2pKxO1N2Hg5ZuA8COfYuhU9MC1gta1uOiycVC1zbAAHuXLM7Lt2/jlmq4dU7KkYOs2yhvpXcj5WXdp9itkIu1t+7qkdoKnUm61MAcUUZJGuG1gOXJaTyqX/ADz1Xz4yldfQq/FQPceq0+WS7ZV7rQhwIjYQBkC0EN+pUKbYrRkGi1zcAai2g+Ci+bXon+afbkjtlSakZjO3YobwWgi3E9910yfZRD3MaLdUcc9Tqtd2zstrZX8cjwyuQM1OPk3eVfJ4ZJw1R0PVxHsvyF+CoMeHXRXp3loczhcX8FSZA4OHAkeC3cyObBfUnoYt/wCjUNv/ALP+rlXy9KOTcNu2919P+hUf8Gof7z/q5UiK2Sh1f3n5qcoNCM395+anKUCIiAiIgIiICIiAVBeTG8O4HIqcrVRGHAhBrXpK3RZtWkcwZTwhz4XD38Ps9zrAeRXys+MtJaRZwJBysQeIK+yqGow/k3ZEaHgQueek/wBHFLPFLW08YiqWua95aSGzMv17t0DrHFca27VFTHztLr+K2zchl3K1vNu76vc4ibWtdtiR+tZLciEBhdxus8spcbpvj47jnJXQqY6FZWnz4LCUEl/gs3SMPNcltds0n04zGSyEL28reCiQh2WQ81LicW6hXiKizkZ5fBY+oFtB8FkaonkVj6knl8VWrRha+na7MjMeBWrbYoWWe4ZkjytxW5VIyK17aLbh4tqCpxuqpnzLHKNqkBxAN7fJQA8kjs7NFK2qwiQg8yvaSjfI9kcTHvlfZrWNbic5x5ALtnTzbvba/R7uXNtSVgwubSxkdLLazQ0atB0Lj8NSvpaCmipYWwxMayNgwsY3ID8bkknmVr/ot3el2dQMgnwiVznyOaDcR4gMieJFs1nGkyvJPstJsOHepF2hjwtUpeAWXqIEREBERAREQEREBERBC2hCC2/FK6lNTSywk2M0cjO4uaQCpMwuCreynHC5p+yT5IOUChdVQESNtIG4HAjNs7SQ74grWNjUBgicCM2F1+dwSui1cpp6isjw3JkdIO1r24vqtW2K3E54Ody/uILiuazW56d9symOXtqkO8FQHkMgdhvrYk5Lathb4wu6shwEc8hdWd4KN8JaWdVryLvDMTmjsCwW8Oxn9QwF8zHNzeAzEH8b4RkLKZ8bOYrZnLuXbq1HXscAWuBHYbhT31LbE8Vyih2LUwBr4qjFZrXOjzIaftC4yyW+bJc50d3G5sqWSXhrjbZzNMxLO22SwtdtCOPrOeGgcyAtf3jrawno6cWsM3kZNC0vbmzqiIxyVjpJBKHEWeGXtyyNr37FMxl7quWdxnEbNtPfGmacIdccS0XAVqmrmzxl7DiGawlPTUjmsBp3sMt8LnyCQOOnC1j4LNbI2IKdkjm5MdoL8eaWYzpWXK83pz/aFI59UWhuLPTh+5dx9Fe5McGGueA6XCQw2sG4vaNu7Id5WsbobDjkknqHWuLAX7l2Dd6HoqWFvJl+Wuf1WuN3f4x8mPxx/dX62pN+jbmTqfdVdNFhFlH2ey93HU3U5aucREQEREBERAREQEREBERB4QolGcMrh7w+SmKHVgtIeBct+KDV996Xo5mztB/Ks6M8sbSSD32J8lpG7ROM3/bMrszwyaM4mhzXA9Ui4uuMbAdbEQNAPmclnnO638eW9T6bZPTNlaARdRWbCZxFh5XWT2eRYFSXglYa1XVLxww08IY3C3Ic+J7lI2X1Y7fRWNqOtle5V6jk6iXpMnLG3vI+4uCc8r2toe2yt1uzDI3C4BzNQMIcAeFr6KoPHSZHO/mssGcvLgm9J1a16m2Bd4c7MN0FhZo7BwV/eFwbHhbwss4XYRpZaxt6S7XHgLJOaplvSPurC6UOia/A98rWg6iziATbuuuyVQDIsIvYANHPSwXLfR1sSWaVk4u2GKQlziPbc21gOedrngun7TscDeN7+C6MJrbk8mW9T6V0jLNCvqlgsFUrshERAREQEREBERAREQEREBW5xdpVxUvGSC1sq2C3InwXI2UBppqiE/xcjwL6uZclp8iF1jZhs6RtuRWgb4xubWTnmInjtbgDfm0qufTTx3lKpJbAKmp2q1pwl4HxN1q22dvNp4gQbvfawvoO1aG/aUsrsRLrXJxG+EFYyXuur5a4nLp09cwufncnQ8HdxWb2WAYnk8ua4sNpScXdXlfInuWxbL3zkjjMbmFxAyde3mpuN9GHlx98NlfI0GQuNs8s879izFFUkAYs9PBciqtqyufiLiPHInksrs3eR7csVxlxyKi4cJ/NNuozvy/Falt535N/f5rI7N2q2dhwnNuo5KFW0xmbgbrI9rR2lzgPqqyaukZ5SzcdK3AozBQU9/aeHSH/APZLh8CFPpiZHF58OwK/JGIoAwZBjWsHgAB8komWaF1OFICIiAiIgIiICIiAiIgIiICIiAvF4XAKLPVfZaLnsQeUxtMRwIPitO9IbDFV0spt0c7HwnmJGkvb5hzvJbrR0RBxvzdw5NC0n0s1rHRQQMLHTdKHZEF0WFjiO4k2FlF6q2Pccy2nu7UVFQWi2Bp4usAw5hZ3a+x2QxxtjbkzI5e0eJUmlq79HMPtgNd2PGl/iFlKpuNoI7FzW13eLWN213Z+yqCYYZoyHWNpGnBd1752WVO4dEL2mOAjiWOI8VaFGWOxsy5tIxMKvesal0UZvwu5rQedtEluuWuXj8eV3jdfprW2tg0DGgQmZz7faeC0Ova58Fhq/dxzIOnaScxfP2W81tklH0jutYD3GjXvWxRU7RHhcBhI0IyKmW75V8mHjxmsef20Dcyqw9I2/WeAAO29lvmwwDXUUI+yXPPH2WOI+PyWOptn08RMzY2tw3awAZuPE9yvbo7ShhrxJUOLS5kmE4S4B2WttAG3V5d5cOTKaxrqe1ndVo4Fwv2q7DoEliZOwEHE05tcDcdhCixSGM4H+B4OC2c6ci8BuvUBERAREQEREBERARFbndYEoLc1UG5cVZD5Xey2w5nJXtnRgtxkZknUaBYebfKC9omSTfyg3Aw9xdmfJTJb0MoKKR3tPt2D9avsjjgaXEhoGr3EAAdpK0fbO+07cmBkZOgA6WQ95OQ8lqtdtSqqyGzSufiOTMmxt7cIyVphfaNtu25vmZTJFSksjbcPqDkSOIYOH9I+C5jtXaYMkbWDCyMk63LnE6k8SsltmpaxogZo217fad2rWK5pxq3xnStyvpttI5pJF7Rz5/0JeI+oWV2XOQDG/wBppI7+R8dVo1HWlownNp4X8iO0LO0e0cdusBIBkSbNlbyPIrnz8Vx/jpw80vXbaoz2KqeGwuQPKyxtPtIN/ONLD/KFge46FSZdqxkZuHnclVk1G/z3y9iwj7PwVMsnSXaDZrfaP0HaostVizF42D7bhh8hqSo9TXRBoa5xbGPsA3ll7TyB7c1WY/Xatz++IqlmD8TvZjZcA6NAGtlpcm0wapkn2Gm3czT63U3bm2XSDA0YIxowce9a2M3DtIW+GHx5vbn8nl+XGPTru6e8fqryXFxp3ZObe4jdfJ4HzC6b+TqGNc1wcx4Ba9puCDoQVwbY0zXHCci5pBHB1hcEdqzu6W8stFM2JzyaVzgHMcbiIE+0DwtqRoVpZ7jKV1OKRzHYH+B4OCmg3VE8LZmtN8siHNNx4HkopbJHr1m8+Xes1k5FRG+4uq0BERAREQEREBR609UqQo9d7JQX6L82zuC5JU1Z9lmXbyXW6L82zuC5BN1Vp4/atQHi13O8+av0IwRyTu1sbDkFDmcZHBvBTNvHo4GM0xEePFaVVruIucXHtJ71CrBoeX1UoZC3Eqh8d7tOhv4Kl70icS1BB05K8w2VlzS04T+3apdDTukeGNGZ+AUy8aqNcyxl9l7TcOq57gDpcCRnkc1knVzGi/TRj+rhAeT5rHnZfSAsjcYtLuFnEEZG1+dlPg3fb0Ya6Rxy9rC3Ee/tXPZjbw68c8pNXVYat2i556uIDm43efoPBY+WTtU3adH0LsN7jgbWJH61iZ5AFvPjJw5r8sryjVDko4bHG7Th4qumpi83Onz7FLrG4Wgd3hciyb91Mm+J0nbEuJ2AaEnwyKyNdH1yomxW3lj8fkVktoDrK0iJ0k7C3kqqIgRyYob5xPGJg524jwXXdj1/rVOybDh6TH1b4gLOc0Z+F1xABdg3B/5Cn/tf896p5JJytE+gJsQeF1MUGh1f3n5qcs1hERAREQEREBR672SpCj13slBfovzbO4LitXLwXaqL82zuC4o2LiVr4/auS5sqDrX4/JRd65ryMYD7Av4n9yzWyo+K1bbMmOeVw0uQO4ZfRXql6RADfIX/AFqRTwPIcbNAzGuasiN32SshBTyhgs7XPRUnOyziRhdoRF3WAzbr2hIQ9uE9YE20y6tsllm0TzcHz5qBPA5zus4m1+NuwKL3F8JxbWa3cnBBac3Z3ubuzN7rN1tWGNAP7Ba/uzSkyvec2i1hnYG1rlVbw1GKTC1w0tr55LGznhpj1usbtGqMgJOdibcLC6xcMBec8h8h+tZZ8OjR2BVSQBl2tGXD9S1wnG2Wdu6opqcaDT5BQNouxPsNL/LIfVZMuIaQBn8ljHM6xPKw+F/qrXmxOM1jazO7kd5L+6D8clkdox2N1F3Uh/OPPYFmKuIHIq8VnTDYCV13cIWoacf13+c9cv6Gy6puV/ycH9r/AJz1XydLRIodX95+anKDQjN/efmpyxWEREBERAREQFbnbcEK4iCxs+UBuEnNt9cslj/4L0GnRDP+elz/APJZCWma7grJ2e3h80n6NLce7dI3JsVv7SU/7lCO42zSSfVszf8Aj6jM/wCNZA0bvfd5lPUz77vMqd37RqII3I2cP/b/AKaf76vDdKhtboMh/OzfeUj1M++7zKepn33eZUbqdRH/AIJUP/wfpZvvKOdxtmnP1bP+vqPvrIepn33eZT1M++7zKbFil3VoogRHAGg6jpJTfzcrEm5OznOxup7v59NOPhjsp3qZ993mU9TPvu8yghDcnZ2vq/6af769O5uz/wDp/wBNN99TPUz77vMp6mffd5lN01EE7k7O09X1/np/vq1/AHZn/S6/z9Tr/jWT9TPvu8ynqZ993mU2I1LulQxDCyDCOXSzHPxcrh3Xoz/E/pJfvK76mffd5lPUz77vMqd37NRHfuvQ8Yh/3pR/uU6CKKnjEcVmsbiwtxF1iSTqSTqSrRoQc3EnxVbKNoUc+woWEC51KlLwCy9QEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q=="></img>
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>                
                <div className="level-right">
                    <a className="button is-info is-outlined" href="http://localhost:8000">Go to homepage</a>
                </div>
            </section>
            
        );
    }
}

export default Voucher;

if (document.getElementById('voucher')) {
    ReactDOM.render(<Voucher />, document.getElementById('voucher'));
}

