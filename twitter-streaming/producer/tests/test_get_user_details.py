from utilities.get_user_details import get_user_details

class TestGetUserDetails():
    """ Test all functions related to getting user details """

    def test_get_user_details(self):

        author_id = '857218448040095744'
        user_details: dict = get_user_details(user_id=author_id)

        assert user_details is not None 
        assert isinstance(user_details['name'], str) == True

        
