import authReducer from '../../reducers/auth';
import * as actionTypes from '../../constants/actionTypes';

describe('auth reducer',()=>{
    it('should return a default state',()=>{
        expect(authReducer(undefined,{})).toEqual('ANOMINOUS')
    });

    it('should return a role admin',()=>{
        expect(authReducer('ANOMINOUS',{
            type:actionTypes.SET_ADMIN,
            role:"ROLE_ADMIN"
        })).toEqual('ROLE_ADMIN')
    });

    it('should return a role user',()=>{
        expect(authReducer('ANOMINOUS',{
            type:actionTypes.SET_USER,
            role:"ROLE_USER"
        })).toEqual('ROLE_USER')
    })

    it('should return a role anominous after logout',()=>{
        expect(authReducer('ROLE_ADMIN',{
            type:actionTypes.SET_USER,
            role:"ANOMINOUS"
        })).toEqual('ANOMINOUS')
    })
})