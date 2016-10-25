/*jslint browser: true*/
/*global $, jQuery, alert*/

var main = function () {
    'use strict';
    $('.carousel').carousel({
        interval: 6500
    });
    
    function slider() {
        var currentSlide = $('.active-slide'),
            nextSlide = currentSlide.next(),
            currentBull = $('.active-bull'),
            nextBull = currentBull.next();
        
    
        if (nextSlide.length === 0) {
            nextSlide = $('.slide1').first();
        }
        if (nextBull.length === 0) {
            nextBull = $('.bull1').first();
        }
        
        currentSlide.removeClass('active-slide');
        nextSlide.addClass('active-slide');
        currentBull.removeClass('active-bull');
        nextBull.addClass('active-bull');
    }
    
    setInterval(slider, 6500);
    
    $('.bull1').click(function () {
        var currentSlide = $('.active-slide'),
            currentBull = $('.active-bull');
        
        currentSlide.removeClass('active-slide');
        currentBull.removeClass('active-bull');
        $('.slide1').addClass('active-slide');
        $('.bull1').addClass('active-bull');
        setTimeout(slider, 6500);
    });
    
    $('.bull2').click(function () {
        var currentSlide = $('.active-slide'),
            currentBull = $('.active-bull');
        
        currentSlide.removeClass('active-slide');
        currentBull.removeClass('active-bull');
        $('.slide2').addClass('active-slide');
        $('.bull2').addClass('active-bull');
        setTimeout(slider, 6500);
    });
    $('.bull3').click(function () {
        var currentSlide = $('.active-slide'),
            currentBull = $('.active-bull');
        
        currentSlide.removeClass('active-slide');
        currentBull.removeClass('active-bull');
        $('.slide3').addClass('active-slide');
        $('.bull3').addClass('active-bull');
        setTimeout(slider, 6500);
    });
    $('.bull4').click(function () {
        var currentSlide = $('.active-slide'),
            currentBull = $('.active-bull');
        
        currentSlide.removeClass('active-slide');
        currentBull.removeClass('active-bull');
        $('.slide4').addClass('active-slide');
        $('.bull4').addClass('active-bull');
        setTimeout(slider, 6500);
    });
    $('.bull5').click(function () {
        var currentSlide = $('.active-slide'),
            currentBull = $('.active-bull');
        
        currentSlide.removeClass('active-slide');
        currentBull.removeClass('active-bull');
        $('.slide5').addClass('active-slide');
        $('.bull5').addClass('active-bull');
        setTimeout(slider, 6500);
    });
    
    
};

$(document).ready(main);
