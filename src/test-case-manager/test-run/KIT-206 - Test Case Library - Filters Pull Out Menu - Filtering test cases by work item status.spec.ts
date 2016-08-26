
      describe('KIT-206 - Test Case Library - Filters Pull Out Menu - Filtering test cases by work item status', function(Inputs) {
        
      it('should Open test case list by navigating Test Case Library -> Test Case', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('n/a');
        Done();
      });
    
      it('should Click on Filter button', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Filter Pull Out Menu display');
        Done();
      });
    
      it('should - Leave Work Item Status default value 'empty' on filter menu
- Verify test cases in the list', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('All test case belonging to any work item no matter what work item status is display in the list');
        Done();
      });
    
      it('should - S et Work Item Status "Pending"
- Verify test cases in the list', function(Done) {
        expect(Inputs['Test Run']['4'].result).to.eql('Test case belonging to  work item whose status is Pending display in the list only');
        Done();
      });
    
      it('should - S et Work Item Status "Planning"
- Verify test cases in the list', function(Done) {
        expect(Inputs['Test Run']['5'].result).to.eql('Test case belonging to  work item whose status is Planning display in the list only');
        Done();
      });
    
      it('should - S et Work Item Status "Execute"
- Verify test cases in the list', function(Done) {
        expect(Inputs['Test Run']['6'].result).to.eql('Test case belonging to  work item whose status is Execute display in the list only');
        Done();
      });
    
      it('should - S et Work Item Status "Completed"
- Verify test cases in the list', function(Done) {
        expect(Inputs['Test Run']['7'].result).to.eql('Test case belonging to  work item whose status is Completed display in the list only');
        Done();
      });
    
      it('should - S et Work Item Status combination of some status
- Verify test cases in the list', function(Done) {
        expect(Inputs['Test Run']['8'].result).to.eql('Test case belonging to  work item whose status are matching with specified ones display in the list only');
        Done();
      });
    
      });
    