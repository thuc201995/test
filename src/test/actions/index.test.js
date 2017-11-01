import * as actions from "../../actions/index";
import * as actionType from "../../constants/actionTypes";

describe('action',()=>{
    it('should create a action to set admin',()=>{
        const expectedAction={
            type: actionType.SET_ADMIN,
            role: "ROLE_ADMIN"
        }

        expect(actions.setAdmin()).toEqual(expectedAction);
    });

    it('should create a action to set user',()=>{
        const expectedAction={
            type: actionType.SET_USER,
            role: "ROLE_USER"
        }

        expect(actions.setUser()).toEqual(expectedAction);
    });

    it('should create a action to remove authentication',()=>{
        const expectedAction={
            type: actionType.LOGOUT,
            role: "ANOMINOUS"
        }

        expect(actions.logout()).toEqual(expectedAction);
    });

  
})

