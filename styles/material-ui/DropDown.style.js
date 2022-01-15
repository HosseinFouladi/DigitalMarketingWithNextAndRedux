import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { device } from '../../utilities/GlobalVariablesStyles';
import MenuItem from '@material-ui/core/MenuItem';
export const DropButton=styled(Button)`

@media ${device.mobileS}{
    font-size:.8rem !important;
    padding:3px 5px !important;
    min-width: .3rem!important;

}
@media ${device.mobileM}{
   font-size:.6rem !important;
   padding:3px 10px !important;
    min-width: .6rem!important;
}
 @media ${device.tablet}{
    font-size: 1rem!important;
    padding:5px 15px !important;
    min-width: .9rem!important;
}
@media ${device.laptop}{
   font-size: 1.2rem!important;
   padding:10px 20px !important;
    min-width: 1rem!important;
}
`
export const Menuitem=styled(MenuItem)`

 @media ${device.mobileS}{
    font-size:.8rem !important;
    padding:3px 5px !important;
    min-width: .3rem!important;
    min-height:.2rem!important;

}
@media ${device.mobileM}{
   font-size:.6rem !important;
   padding:3px 10px !important;
    min-width: .6rem!important;
    min-height:.4rem!important;
}
 @media ${device.tablet}{
    font-size: 1rem!important;
    padding:5px 15px !important;
    min-width: .9rem!important;
    min-height:.6rem!important;
}
@media ${device.laptop}{
   font-size: 1.2rem!important;
   padding:10px 20px !important;
    min-width: 1rem!important;
    min-height:.8rem!important;
}
`