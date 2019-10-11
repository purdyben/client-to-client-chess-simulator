package com.piratechess.news;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class RSSController {
	@RequestMapping(value = "/rssfeed", method = RequestMethod.GET)
	public ModelAndView getFeedInRss() {

		List<RSSObject> items = new ArrayList<>();

		RSSObject content = new RSSObject();
		content.setTitle("Spring Tutorial");
		content.setUrl("http://www.tutorialspoint/spring");
		content.setSummary("Spring tutorial summary...");
		content.setCreatedDate(new Date());
		items.add(content);

		RSSObject content2 = new RSSObject();
		content2.setTitle("Spring MVC");
		content2.setUrl("http://www.tutorialspoint/springmvc");
		content2.setSummary("Spring MVC tutorial summary...");
		content2.setCreatedDate(new Date());
		items.add(content2);

		ModelAndView mav = new ModelAndView();
		mav.setViewName("rssViewer");
		mav.addObject("feedContent", items);

		return mav;
	}
}