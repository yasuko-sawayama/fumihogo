require "rails_helper"

RSpec.describe ApplicationController do
  describe 'Punditの検証をスキップするページ' do

    it 'デバイス関連はスキップする' do
      controller = Users::OmniauthCallbacksController.new
      expect(controller.send(:auth_skipping_controllers?)).to be_truthy
    end

    it 'High Voltage関連はスキップする' do
      controller = HighVoltage::PagesController.new
      expect(controller.send(:auth_skipping_controllers?)).to be_truthy
    end
  end
end
