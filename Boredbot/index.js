const activityEl = document.getElementById('activity')
const btnEl = document.getElementById('get-activity-btn')

function getActivity() {
   fetch("https://apis.scrimba.com/bored/api/activity")
   .then(response => response.json())
   .then(data => {
      console.log(data)
      document.getElementById('activity').textContent =  data.activity
   })
}

btnEl.addEventListener('click', getActivity)
