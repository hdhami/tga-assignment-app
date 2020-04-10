import RobotoLight from '../../resources/fonts/Roboto-Light.woff2';
import RobotoRegular from '../../resources/fonts/Roboto-Regular.woff2';
import RobotoMedium from '../../resources/fonts/Roboto-Medium.woff2';
import RobotoBold from '../../resources/fonts/Roboto-Bold.woff2';

const fonts = `
        @font-face {
            font-family: 'Roboto';
            font-weight: 300;
            font-style: normal;
            font-display: block;
            src: local('Roboto'),
                url(${RobotoLight});
            unicode-range: U+000-5FF;
        }
        @font-face {
            font-family: 'Roboto';
            font-weight: 400;
            font-style: normal;
            font-display: block;
            src: local('Roboto'),
                url(${RobotoRegular});
            unicode-range: U+000-5FF;
        }
        @font-face {
            font-family: 'Roboto';
            font-weight: 500;
            font-style: normal;
            font-display: block;
            src: local('Roboto'),
                url(${RobotoMedium});
            unicode-range: U+000-5FF;
        }
        @font-face {
            font-family: 'Roboto';
            font-weight: 700;
            font-style: normal;
            font-display: block;
            src: local('Roboto'),
                url(${RobotoBold});
            unicode-range: U+000-5FF;
        }
        
`;

export default fonts;
