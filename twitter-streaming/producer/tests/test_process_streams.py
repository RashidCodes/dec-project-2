from utilities.process_streams import process_streams
from utilities.get_user_details import get_user_details
import json 

class TestGetUserDetails():
    """ Test all functions related to processing streams """

    def test_process_streams(self):

        author_id = '857218448040095744'
        user_details = get_user_details(user_id=author_id)

        # convert user details to str 
        user_details = json.dumps(user_details)

        processed_stream = process_streams(json_stream=user_details)

        assert processed_stream is not None 
        assert isinstance(processed_stream, dict) == True
        assert 'id' in processed_stream.keys()

