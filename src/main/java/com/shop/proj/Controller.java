package com.shop.proj;

import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.stereotype.Controller
public class Controller {
	@RequestMapping({"/", "/index"})
	public String index1() {
		System.out.println("test ");
		return "index";
	}

	@RequestMapping("/index2")
	public String index2() {
		System.out.println("test ");
		return "index2";
	}

	@RequestMapping("/index3")
	public String index3() {
		System.out.println("test ");
		return "index3";
	}

	@RequestMapping("/index4")
	public String index4() {
		System.out.println("test ");
		return "index4";
	}

}
