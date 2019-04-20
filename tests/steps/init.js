let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.TEST_ROOT = "https://xiz2ikmk72.execute-api.eu-west-1.amazonaws.com/dev"
  process.env.restaurants_api   = "https://xiz2ikmk72.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
  process.env.order_events_stream = 'orders-dev-cosmin'
  process.env.restaurant_notification_topic = 'restaurants-dev-cosmin'
  process.env.restaurants_table = "restaurants-dev-cosmin"
  process.env.AWS_REGION        = "eu-west-1"
  
  initialized = true
}

module.exports = {
  init
}
