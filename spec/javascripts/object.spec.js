describe("marionette object", function(){

  describe("when creating an object", function(){

    var Object = Marionette.Object.extend({
      initialize: jasmine.createSpy("initialize method")
    });

    var object, options, handler;

    beforeEach(function(){
      options = {};
      object = new Object(options);

      handler = jasmine.createSpy("foo handler");
      object.on("foo", handler);

      object.trigger("foo", options);
    });

    it("should support triggering events", function(){
      expect(handler).toHaveBeenCalledWith(options);
    });

    it("should have an event aggregator built in to it", function(){
      expect(object.eventBinder).not.toBeUndefined();
      expect(typeof object.bindTo).toBe("function");
    });

    it("should support an initialize function", function(){
      expect(object.initialize).toHaveBeenCalled();
    });

    it("should pass constructor options to the initialize function", function(){
      expect(object.initialize.mostRecentCall.args[0]).toBe(options);
    });

  });

});
